const User = require('../models/vehicle');
const fs = require('fs');
const path = require('path');

// let's keep it same as before
module.exports.output = function(req, res){
    User.findById(req.params.id, function(err, vehicle){
        return res.render('output', {
            title: 'Input/Output'
        });
    });

}