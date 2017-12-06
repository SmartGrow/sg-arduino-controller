var redux = require('redux');
var reducers = require('./reducers');

var store;

module.exports = {
    initialize: function() {
        if (!store) {
            store = redux.createStore(reducers);
        } else {
            throw new Error("Store already created.");
        }
    },

    dispatch: function(action) {
        store.dispatch(action);
    },

    getState: function() {
        return store.getState();
    }
};