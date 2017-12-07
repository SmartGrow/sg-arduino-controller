var express = require('express');
var router = express.Router();

var boardActions = require('../actions/board');
var store = require('../store');

router.get('/', function(req, res, next) {
  res.json(store.getState().board);
});

router.put('/turn-on', function(req, res, next) {
  store.dispatch(boardActions.turnOn());
  res.sendStatus(200)
});

router.put('/turn-off', function(req, res, next) {
  store.dispatch(boardActions.turnOff());
  res.sendStatus(200)
});


module.exports = router;
