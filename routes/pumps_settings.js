var express = require('express');
var router = express.Router();
var db = require('../db/pumps')
/* GET home page. */
router.get('/', function(req, res, next) {
  pumps = db.get('pumps').value();
  res.render('pumps', {active_route: '/pumps-settings', pumps: pumps});
});

module.exports = router;
