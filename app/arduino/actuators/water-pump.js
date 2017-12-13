var store = require('../../store');
var board = require('../board');
var actuatorsActions = require('../../actions/actuators');


var instance;

/**
 * Mock
 */
var mockThreshold = 30;

function WaterPumpActuator(props) {
  this.type = "ACTUATOR";
  this.name = "Water Pump";
  this.listener = (state) => {

    var value = state.sensors.soilMoisture;

    if (value <= mockThreshold) {
      if (!state.actuators.waterPump.on) {
        store.dispatch(actuatorsActions.turnOnWaterPump());
      }
    } else {
      if (state.actuators.waterPump.on) {
        store.dispatch(actuatorsActions.turnOffWaterPump());
      }
    }
  }
};

module.exports = {
  initialize: (props) => {
    if (instance) {
      throw new Error("Instance already created. " + instance.type + ": " + instance.name);
    }

    instance = new WaterPumpActuator(props);
    board.registerListener(instance);
    return instance;
  }
}