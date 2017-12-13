actuatorsInitialState = {
  waterPump: {
    on: false
  }
};

module.exports = function(state = actuatorsInitialState, action) {
  
    switch (action.type) {
        case 'TURN_ON_WATER_PUMP': return Object.assign({}, state, { waterPump: { on: true } });
        case 'TURN_OFF_WATER_PUMP': return Object.assign({}, state, { waterPump: { on: false } });
    }

    return state;
}