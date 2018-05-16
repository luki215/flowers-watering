var express = require('express');
var router = express.Router();
var db = require('../db/pumps');
var pumps_scheduler = require('../lib/pumps_scheduler');

router.get('/', function(req, res, next) {
  pumps = db.get('pumps').value();
  schedules = db.get('schedules').value();
  schedules = schedules.map(s => Object.assign(s, pumps[s.pump_id]) )
  res.render('pumps', {active_route: '/pumps-settings', pumps: schedules});
});

router.patch('/:id', function(req, res, next) {
  settings = req.body
  settings.pump_id = parseInt(req.params.id)
  pumps_scheduler.reschedule(settings)  
  res.status(200).send();
  
});

module.exports = router;
