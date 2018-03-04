var express = require('express');
var router = express.Router();

var toppings = [
  {
    key: 'chicken',
    value: 'Chicken',
    price: 1.25,
    isActive: false
  },
  {
    key: 'pepperoni',
    value: 'Pepperoni',
    price: 1.25,
    isActive: false
  },
  {
    key: 'sausage',
    value: 'Sausage',
    price: 1.5,
    isActive: false
  },
  {
    key: 'bellPepper',
    value: 'Bell Pepper',
    price: 1.25,
    isActive: false
  },
  {
    key: 'pineapple',
    value: 'Pineapple',
    price: 1.5,
    isActive: false
  }
];

var sizes = [
  {
    key: 'small',
    value: '10" Small',
    price: 10,
    isActive: false
  },
  {
    key: 'medium',
    value: '12" Medium',
    price: 12,
    isActive: false
  },
  {
    key: 'large',
    value: '14" Large',
    price: 14,
    isActive: false
  },
  {
    key: 'xLarge',
    value: '16" X-Large',
    price: 16,
    isActive: false
  }
];

router.get('/', function(req, res, next) {
  res.json({
    toppings,
    sizes
  });
});

module.exports = router;
