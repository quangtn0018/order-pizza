var pizzaData = require('../json/pizzaData.json');
var admin = require('firebase-admin');
var serviceAccount = require('./order-pizza-56581-firebase-adminsdk-iz8vc-4c1f8416a6.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://order-pizza-56581.firebaseio.com'
});

var db = admin.database();
var pizzaDataRef = db.ref('pizzaData');

// populate pizzaData if it doesn't exist in firebase db
pizzaDataRef.once('value', function(snapshot) {
  if (!snapshot.val()) {
    pizzaDataRef.set({
      toppings: pizzaData.toppings,
      sizes: pizzaData.sizes
    });
  }
});

module.exports = admin;
