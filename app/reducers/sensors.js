sensorsInitialState = {
  soilMoisture: 0
};

module.exports = function(state = sensorsInitialState, action) {
  
    switch (action.type) {
        case 'SOIL_MOISTURE_UPDATE': return Object.assign({}, state, { soilMoisture: action.value });
    }

    return state;
}