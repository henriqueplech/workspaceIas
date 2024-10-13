var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// create a login endpoint that accepts username and password. Return error 401 if user not equals to 'henriqueplech1@gmail.com' and password not equals 'teste123'




module.exports = router;
