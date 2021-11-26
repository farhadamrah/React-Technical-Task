import * as TYPES from '../types';

const initialState = {
    usersData: {},
    userData: {},
};

const users = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.GET_USERS: {
            return { ...state, usersData: action.payload };
        }

        case TYPES.GET_USER: {
            return { ...state, userData: action.payload };
        }

        case TYPES.REMOVE_USER: {
            return { ...state, userData: {} };
        }

        default: {
            return state;
        }
    }
};

export default users;
