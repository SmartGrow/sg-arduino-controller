var store = require('../../store');
var board = require('../board');

var instance;

function SoilMoistureSensor(props) {
  this.type = "SENSOR";
  this.name = "Soil Moisture";
  this.listener = (state) => {
    console.log(this.type, this.name, state);
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

