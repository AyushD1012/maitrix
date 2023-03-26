//node module contain all libraries used in nodejs
//package-lock.json some more dependency

const express = require('express');
const path = require('path');
const port = process.env.PORT || 9391;

const db = require('./config/mongoose');
const Vehicle = require('./models/vehicle');


const app = express();


//setting view engine
app.set('view engine', 'ejs');
//setting view path
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded());

const expresslayouts = require('express-ejs-layouts');
app.use(expresslayouts);



//to use routes in main index.js
app.use('/', require('./routes/index'));

// setting up static files 
app.use(express.static('./assets'));




app.get('/', function (req, res) {
    return res.render('home', {
        title: "ANPR system"
    });

});


app.get('/output', function (req, res) {
    return res.render('output', {
        title: "Input/Output"
    });

});





app.listen(port, function (err) {
    if (err) {
        console.log('Error running in server');
    }
    console.log('Yup! Server working perfectly on port');
});