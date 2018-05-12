var express = require('express');
var router = express.Router();
var db = require('../db/pumps')
/* GET home page. */
router.get('/', function(req, res, next) {
  print(db);   
  pumps = db.get('pumps').value();
  res.render('index', {pumps: pumps});
});

module.exports = router;
