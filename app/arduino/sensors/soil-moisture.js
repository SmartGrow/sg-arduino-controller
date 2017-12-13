var store = require('../../store');
var board = require('../board');
var sensorActions = require('../../actions/sensors');


var instance;

/**
 * Mock
 */
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

  setInterval(() => {
    var value = mockReadPinValue();
    store.dispatch(sensorActions.soilMoistureUpdate(value));
  }, 200);

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