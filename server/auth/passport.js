// Handle serialie and deserialize
const passport = require('passport');
const knex = require('../db/connection');

module.exports = () => {

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    knex('users').where({id}).first()
    .then((user) => { done(null, user); })
    .catch((err) => { done(err, null); });
  });

};

// Serialization is the conversion of an object to a series of bytes, so
// that the object can be easily saved to persistent storage or streamed across 
// a communication link. The byte stream can then be deserialized - converted into
// a replica of the original object.
