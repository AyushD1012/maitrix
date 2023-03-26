const mongoose = require('mongoose');

//schema is the format which database follow in upcoming entries

const ANPRschema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    vehicle: {
        type: String,
        required: true

    },
    number: {
        type: String,
        required: true
    }
    //you can also predefine type of number like number starting from 91 etc

});

const Vehicle = mongoose.model('Vehicle', ANPRschema);

module.exports = Vehicle;