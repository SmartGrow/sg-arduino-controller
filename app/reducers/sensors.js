sensorsInitialState = {
  soilMoisture: 0,
  waterPumpState: false
};

module.exports = function(state = sensorsInitialState, action) {
  
    switch (action.type) {
        case 'SOIL_MOISTURE_UPDATE': return Object.assign({}, state, { soilMoisture: action.value });

        case 'TURN_ON_WATER_PUMP': return Object.assign({}, state, { waterPumpState: true });
        case 'TURN_OFF_WATER_PUMP': return Object.assign({}, state, { waterPumpState: false });
    }

    return state;
}