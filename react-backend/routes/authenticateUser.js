var express = require('express');
var router = express.Router();

const authenticationKeys = {
  userName: 'admin',
  password: '123'
};

router.get('/', function(req, res, next) {
  res.json({
    ...authenticationKeys
  });
});

module.exports = router;
