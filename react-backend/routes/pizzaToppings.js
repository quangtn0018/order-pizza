var express = require('express');
var router = express.Router();

var toppings = [
  {
    key: 'chicken',
    value: 'Chicken',
    price: 1.25
  },
  {
    key: 'pepperoni',
    value: 'Pepperoni',
    price: 1.25
  },
  {
    key: 'sausage',
    value: 'Sausage',
    price: 1.5
  },
  {
    key: 'bellPepper',
    value: 'Bell Pepper',
    price: 1.25
  },
  {
    key: 'pineapple',
    value: 'Pineapple',
    price: 1.5
  }
];

router.get('/', function(req, res, next) {
  res.json(toppings);
});

module.exports = router;
