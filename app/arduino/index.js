var five = require('johnny-five');
var store = require('../store');

var board;

module.exports = {
  initialize: function() {
    if (!board) {

      board = new five.Board({repl: false});
    
      board.on("ready", function() {
        var boardConfig = store.getState().board;

        this.pinMode(13, this.MODES.OUTPUT);
    
        this.loop(boardConfig.loop, () => {
          boardConfig = store.getState().board;
          
          if (boardConfig.on) {
            this.digitalWrite(13, this.pins[13].value ? 0 : 1);
          }
          // console.log(boardConfig);
        });
    
      });

    } else {
      throw new Error("Board already initialized.");
    }
  }
}