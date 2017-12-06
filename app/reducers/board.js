boardInitialState = {
    counter: 0
};

module.exports = function(state = boardInitialState, action) {
    console.log("Board Reducer received:", action, state);

    switch (action.type) {
        case 'UPDATE': {
            return { counter: state.counter + 1 };
        }
    }

    return state;
}