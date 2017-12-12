// var five = require('johnny-five');
var store = require('../store');
var Validate = require('validate-arguments');


var board;
var listeners = [];
var validListenerTypes = [ "SENSOR", "ACTUATOR" ];

/**
 * Initialize board.
 */
var initialize = () => {
  // board = new five.Board({repl: false});
  // board.on("ready", function() {
  //   var boardConfig = store.getState("board");

  //   this.loop(boardConfig.loop, () => {
  //     boardConfig = store.getState("board");
      
  //     if (boardConfig.on) {
       
  //     }
      
  //   });
  // });

  board = {};
  var state = store.getState();
  
  setInterval(() => {
    state = store.getState();

    if (state.board.on) {
      listeners.forEach(listener => {
        
        listener.listener(state);
      });

    }
  }, state.board.refreshRate);

  return board;
};

/**
 * Validate listener.
 * 
 * @param {*Object} listener 
 */
var validateListener = (listener) => {
  var args = Validate.named(listener, {
    type: 'string',
    name: 'string',
    listener: 'function'
  });

  if (!args.isValid()) {
    throw args.errorString();
  }

  if (validListenerTypes.indexOf(listener.type) < 0) {
    throw new Error("Listener type should be one of: " + validListenerTypes.join(', ') + ".");
  }
  
  return listener;
};


module.exports = {

  /**
   * Instantiate the board singleton.
   */
  initialize: () => {
    if (board) {
      throw new Error("Board already initialized.");
    }
    return initialize();
  },

  /**
   * Return the board object.
   */
  getBoard: () => {
    return board;
  },

  /**
   * Register a new listener to the board loop.
   */
  registerListener: (listenerRegister) => {
    if (!board) {
      throw new Error("Board not initialized yet.");
    }
    
    listeners.push(validateListener(listenerRegister));
  }
}