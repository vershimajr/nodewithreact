const GoogleStrategy = require('passport-google-oauth20').Strategy;            //import Google OAuth 2.0 as the desired passport strategy
const keys = require('../config/keys');                                        //use a seperate file in /config directory called keys to store the Google+ API Keys
const passport = require('passport');                                          //import passport for handling operational details of OAuth
const mongoose = require('mongoose');

const User = mongoose.model('users');                                         // Note that we have already loaded the 'users' collection into the database. Now we can retrieve it

passport.use(                                                                  //create the passport handler with the passport strategy details.
  new GoogleStrategy(                                                         //this will create an inner property with key 'google' which will handle Google OAuth procedures(
    {
      clientID: keys.googleClientID,            //ClientID identifies your app to Google Servers (available to public)
      clientSecret: keys.googleClientSecret,    //Client Secret stored on the server side, (secret)
      callbackURL: '/auth/google/callback',
      userProfileURL: 'https://www.googleapis.com/oauth2/v3/userinfo'
    }, 
    (accessToken, refreshToken, profile, done) => {   //function to run when the google strategy has authenticated a user and redirected to callback
      User.findOne({ googleID: profile.id })
       .then((existingUser) => {
         if(existingUser){
          //we already have user in db
         } else {
          //we don't have user in db
          new User({ googleID: profile.id }).save();
         }
        
       })
    }
  )
);

