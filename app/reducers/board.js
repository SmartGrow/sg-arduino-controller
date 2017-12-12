boardInitialState = {
  refreshRate: 500,
  on: false
};

module.exports = function(state = boardInitialState, action) {
  
    switch (action.type) {
        case 'TURN_ON': return Object.assign({}, state, { on: true });
        case 'TURN_OFF': return Object.assign({}, state, { on: false });
    }

    return state;
}