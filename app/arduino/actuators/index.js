var waterPumpActuator = require('./water-pump');


var actuators = [];

module.exports = {

  initialize: () => {
    actuators.push(waterPumpActuator.initialize());
  },

  getActuators : () => {
    return actuators;
  }
}