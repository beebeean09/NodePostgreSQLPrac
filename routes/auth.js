var express = require('express');
var router = express.Router();
var passport = require('passport')
, LocalStrategy = require('passport-local').Strategy;
var authHelpers = require('../server/auth/_helpers');

router.post('/login',
  passport.authenticate('local'),
  function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    res.redirect('/users/' + req.user.username);
  });

// router.post('/login', passport.authenticate('local', { successRedirect: '/',
//                                                     failureRedirect: '/login',
//                                                   failureFlash: true }));

router.route('/signup').post((req, res, next) => {
  passport.authenticate('local-register', (err, user, info) => {
    if (err) {
      res.status(500).send(err);
    } else if (!user) {
      res.status(401).json(info);
    } else {
      res.status(200).json(user);
    }
  })(req, res, next);
});

router.route('/login').post((req, res, next) => {
  passport.authenticate('local-signin', (err, user, info) => {
    if (err) {
      res.status(500).send(err);
    } else if (!user) {
      res.status(401).json(info);
    } else {
      res.status(200).json(user);
    }
  })(req, res, next);
});


// Second choice
router.post('/register', authHelpers.loginRedirect, (req, res, next)  => {
  return authHelpers.createUser(req, res)
  .then((user) => {
    handleLogin(res, user[0]);
  })
  .then(() => { handleResponse(res, 200, 'success'); })
  .catch((err) => { handleResponse(res, 500, 'error'); });
});

router.post('/login', authHelpers.loginRedirect, (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) { handleResponse(res, 500, 'error'); }
    if (!user) { handleResponse(res, 404, 'User not found'); }
    if (user) {
      req.logIn(user, function (err1) {
        if (err1) { handleResponse(res, 500, 'error'); }
        handleResponse(res, 200, 'success');
      });
    }
  })(req, res, next);
});


// Passport exposes a logout() function on req (also aliased as logOut())
// that can be called from any route handler which needs to terminate a login
// session. Invoking logout() will remove the req.user property and clear the
// login session (if any).

router.get('/logout', authHelpers.loginRequired, (req, res, next) => {
  req.logout();
  handleResponse(res, 200, 'success');
});


// Helpers
function handleLogin(req, Promise, user) {
  return new Promise((resolve, reject) => {
    req.login(user, (err) => {
      if (err) reject(err);
      resolve();
    });
  });
}

function handleResponse(res, code, statusMsg) {
  res.status(code).json({status: statusMsg});
}

module.exports = router;
