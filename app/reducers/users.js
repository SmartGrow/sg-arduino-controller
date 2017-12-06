usersInitialState = [];

module.exports = function(state = usersInitialState, action) {

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