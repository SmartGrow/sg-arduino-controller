var soilMoistureSensor = require('./soil-moisture');


var sensors = [];

module.exports = {

  initialize: () => {
    sensors.push(soilMoistureSensor.initialize());
  },

  getSensors : () => {
    return sensors;
  }
}