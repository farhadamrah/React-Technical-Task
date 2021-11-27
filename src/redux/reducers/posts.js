import * as TYPES from '../types';

const storageData = JSON.parse(localStorage.getItem('posts'));

const initialState = {
    postsData: [],
    postData: [],
};

const posts = (state = initialState, action) => {
    const { payload } = action;

    switch (action.type) {
        case TYPES.GET_USER_POSTS: {
            const postsData = storageData ? storageData : payload;

            return { ...state, postsData: postsData };
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
            const postsData = [...state.postsData, payload];

            localStorage.setItem('posts', JSON.stringify(postsData));

            return { ...state, postsData: postsData };
        }

        case TYPES.DELETE_USER_POST: {
            const deletedPost = state.postsData.filter(post => post.id !== payload.id);

            localStorage.setItem('posts', JSON.stringify(deletedPost));

            return { ...state, postsData: deletedPost };
        }

        default: {
            return state;
        }
    }
};

export default posts;
