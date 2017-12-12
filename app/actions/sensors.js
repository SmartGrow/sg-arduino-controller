module.exports = {

    soilMoistureUpdate : (value) => { return { type: 'SOIL_MOISTURE_UPDATE', value } },

    turnOnWaterPump : () => { return { type: 'TURN_ON_WATER_PUMP' } },
    turnOffWaterPump : () => { return { type: 'TURN_OFF_WATER_PUMP' } }
    
}