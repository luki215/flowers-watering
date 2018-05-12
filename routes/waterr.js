var express = require('express');
var router = express.Router();

var water_pumps = require('../lib/water_pumps');

router.patch('/:pumpId/on', function(req, res, next) {
  water_pumps.turnOn(parseInt(req.params.pumpId));
  res.send('respond with a resource');
});
router.patch('/:pumpId/off', function(req, res, next) {
  water_pumps.turnOff(parseInt(req.params.pumpId));
  res.send('respond with a resource');
});

module.exports = router;
