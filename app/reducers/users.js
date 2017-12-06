usersInitialState = [];

module.exports = function(state = usersInitialState, action) {
    console.log("User Reducer received:", action, state);

    switch (action.type) {
        case 'ADD_USER': {
            state.push({
                id: action.id,
                username: action.username
            })
        }
    }

    return state;
}