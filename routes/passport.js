var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));

// Default for username and password field
passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'passwd'
  },
  function(username, password, done) {
    // ...
  }
));

// flash errors or success
// passport.authenticate('local', { failureFlash: "Invalid Password or Username."});
// passport.authenticate('local', { successFlash: "Welcome!"});

// Passport uses what are termed strategies to authenticate requests.
// Strategies range from verifying a username and password, delegated authentication
// using OAuth or federated authentication using OpenID.
