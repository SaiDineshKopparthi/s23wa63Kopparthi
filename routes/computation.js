var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  var rand = Math.floor(Math.random()*11)
  var x = req.query.x;
  if(x != undefined){
    rand = x;
  }
  var randSqrt = Math.sqrt(rand)
   
  res.send(`Math.sqrt() applied to ${rand} is ${randSqrt}`);
});

module.exports = router;
