var redux = require('redux');
var board = require('./board');
var sensors = require('./sensors');


module.exports = redux.combineReducers({
    board,
    sensors
});