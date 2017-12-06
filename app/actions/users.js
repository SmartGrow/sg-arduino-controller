var nextUserId = 1;

module.exports = {
    addUser : function(username) {
        return {
            type: 'ADD_USER',
            id: ++nextUserId,
            username: username
        }
    }
}