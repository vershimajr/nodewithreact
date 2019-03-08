const passport = require('passport');

module.exports = (app) => {
  app.get('/auth/google/', passport.authenticate('google', {                    //use passport google OAuth2.0 authentication as route handler for the /auth/google route of our app
      scope: ['profile', 'email']                                               //ask to receive profile name and email address of user from Google
    })
  );

  app.get('/auth/google/callback', passport.authenticate('google'));            //use passport google OAuth2.0 to also handle callback to redirect URI.
};
