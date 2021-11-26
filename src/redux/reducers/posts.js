import * as TYPES from '../types';

const initialState = {
    postsData: [],
    postData: [],
};

const posts = (state = initialState, action) => {
    const { payload } = action;

    switch (action.type) {
        case TYPES.GET_USER_POSTS: {
            return { ...state, postsData: payload };
        }

        case TYPES.REMOVE_USER_POSTS: {
            return { ...state, postsData: [] };
        }

        case TYPES.GET_USER_POST: {
            return { ...state, postData: payload };
        }

        case TYPES.REMOVE_USER_POST: {
            return { ...state, postData: [] };
        }

        case TYPES.ADD_NEW_USER_POST: {
            return { ...state, postsData: [...state.postsData, payload] };
        }

        case TYPES.DELETE_USER_POST: {
            return { ...state, postsData: state.postsData.filter(post => post.id !== payload.id) };
        }

        default: {
            return state;
        }
    }
};

export default posts;
