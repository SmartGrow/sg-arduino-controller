var redux = require('redux');
var board = require('./board');
var sensors = require('./sensors');
var actuators = require('./actuators');


module.exports = redux.combineReducers({
    board,
    sensors,
    actuators
});