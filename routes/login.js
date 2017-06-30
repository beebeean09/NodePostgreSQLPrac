var express = require('express');
var router = express.Router();
var passport = require('passport')
, LocalStrategy = require('passport-local').Strategy;


router.post('/login',
  passport.authenticate('local'),
  function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    res.redirect('/users/' + req.user.username);
  });

router.post('/login', passport.authenticate('local', { successRedirect: '/',
                                                    failureRedirect: '/login',
                                                  failureFlash: true }));

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
module.exports = router;
