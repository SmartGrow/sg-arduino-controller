var board = require('./board');
var sensors = require('./sensors');

var arduino;

module.exports = {
  initialize: () => {
    if (arduino) {
      throw new Error("Arduino already initialized.");
    }

    arduino = {
      board: board.initialize(),
      sensors: sensors.initialize()
    };

    return arduino;
  }
};

