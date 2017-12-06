var express = require('express');
var router = express.Router();

var userActions = require('../actions/users');
var store = require('../store');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(store.getState().users);
});

router.get('/add', function(req, res, next) {
  store.dispatch(userActions.addUser("Added by dispatch"))
  res.sendStatus(200)
});

router.get('/counter', function(req, res, next) {
  res.send('' + store.getState().board.counter);
});


module.exports = router;
