var express = require('express');
var router = express.Router();
var authHelpers = require('../server/auth/_helpers');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });


router.get('/user', authHelpers.loginRequired, (req, res, next)  => {
  handleResponse(res, 200, 'success');
});

function handleResponse(res, code, statusMsg) {
  res.status(code).json({status: statusMsg});
}

module.exports = router;
