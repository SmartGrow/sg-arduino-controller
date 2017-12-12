var store = require('../../store');
var board = require('../board');
var sensorActions = require('../../actions/sensors');


var instance;

var mockThreshold = 30;
var mockValue = 50;
var inverse = false;

var mockReadPinValue = () => {
  if (mockValue == 20) {
    inverse = true;
  }
  if (mockValue == 40) {
    inverse = false;
  }

  return inverse? mockValue++ : mockValue--;
}


function SoilMoistureSensor(props) {
  this.type = "SENSOR";
  this.name = "Soil Moisture";
  this.listener = (state) => {

    var value = mockReadPinValue();
    store.dispatch(sensorActions.soilMoistureUpdate(value));

    if (value <= mockThreshold) {
      if (!state.sensors.waterPumpState) {
        store.dispatch(sensorActions.turnOnWaterPump());
      }
    } else {
      if (state.sensors.waterPumpState) {
        store.dispatch(sensorActions.turnOffWaterPump());
      }
    }
  }
};

module.exports = {
  initialize: (props) => {
    if (instance) {
      throw new Error("Instance already created. " + instance.type + ": " + instance.name);
    }

    instance = new SoilMoistureSensor(props);
    board.registerListener(instance);
    return instance;
  }
}