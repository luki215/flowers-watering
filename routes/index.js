var express = require('express');
var router = express.Router();

var db = require('../db/pumps')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {active_route: '/', pumps: db.get('pumps').value()});
});

module.exports = router;
