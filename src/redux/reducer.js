const initialState = {
    users: []
};

const users = (state = initialState, action) => {
    switch (action.type) {

        case 'POST_NEW_USER':
            return {
                ...state,
                users: [...state.users, {firstName: action.payload, lastName: action.payload, id: Math.random()}]
            };

        case 'GET_USERS':
            return {
                ...state,
                todos: action.payload
            };


        default:
            return state;
    }
};

export default users;