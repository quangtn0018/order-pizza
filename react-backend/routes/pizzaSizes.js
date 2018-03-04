var express = require('express');
var router = express.Router();

var sizes = [
  {
    key: 'small',
    value: '10" Small',
    price: 10
  },
  {
    key: 'medium',
    value: '12" Medium',
    price: 12
  },
  {
    key: 'large',
    value: '14" Large',
    price: 14
  },
  {
    key: 'xLarge',
    value: '16" X-Large',
    price: 16
  }
];

router.get('/', function(req, res, next) {
  res.json(sizes);
});

module.exports = router;
