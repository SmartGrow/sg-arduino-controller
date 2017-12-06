var redux = require('redux');
var users = require('./users')
var board = require('./board');

module.exports = redux.combineReducers({
    users,
    board
});