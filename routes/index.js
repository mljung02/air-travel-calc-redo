var express = require('express');
var router = express.Router();
var logic = require('../public/javascripts/logic')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Air Travel Calculator' });
});

router.post('/', function(req, res, next) {
  
  var price = logic.priceArray[req.body.departure][req.body.destination];
  var discount = logic.calcDisc(req.body.discount);

  price = (price + req.body.bags*25 + parseInt(req.body.class) 
+ parseInt(req.body.wifi || 0)) * discount;
  price = (logic.checkTrip(req.body.departure,req.body.destination,price));
  var obj = {
    price: "Your price is: $" + price.toFixed(2), 
    title: 'Air Travel Calculator'}
  if (discount === 3){
    obj.price = "Invalid discount code"
  }
  res.render('index', obj);
})

module.exports = router;
