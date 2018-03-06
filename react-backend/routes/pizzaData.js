var express = require('express');
var router = express.Router();
var admin = require('../firebase/index');

router.get('/', function(req, res, next) {
  var db = admin.database();
  var pizzaDataRef = db.ref('pizzaData');

  pizzaDataRef.once('value', function(snapshot) {
    const { toppings, sizes } = snapshot.val();
    res.json({
      toppings,
      sizes
    });
  });
});

router.post('/', function(req, res, next) {
  var db = admin.database();
  var pizzaDataRef = db.ref('pizzaData');

  const { toppings, sizes } = req.body;
  pizzaDataRef.set({
    toppings,
    sizes
  });
});

module.exports = router;
