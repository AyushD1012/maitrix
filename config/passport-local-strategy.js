const passport = require('passport');
const LocalStrategy = require('passport-local').strategy;
const User = require('../models/vehicle');

//authentication using passport

passport.use(new LocalStrategy({
    usernameField: 'email',passReqToCallback:true

},
function(email, password, done){
    //find a user and establish the identity
    
    User.findOne({email: email}, function(err, user){
        if(err){
            console.log('Error in finding User-->passport');
            return done(err);
        }

        if(!user || user.password!=password){
            console.log('Invalid Username/Password');
            return done(null,false);
        }
        return done(null,user);
    });
}))