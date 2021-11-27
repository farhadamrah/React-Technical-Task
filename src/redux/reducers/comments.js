import * as TYPES from '../types';

const storageData = JSON.parse(localStorage.getItem('comments'));

const initialState = {
    commentsData: [],
};

const comments = (state = initialState, action) => {
    const { payload } = action;

    switch (action.type) {
        case TYPES.GET_POST_COMMENTS: {
            const comments = storageData ? storageData : payload;

            return { ...state, commentsData: comments };
        }

        case TYPES.ADD_NEW_POST_COMMENT: {
            const allComments = [...state.commentsData, payload];

            localStorage.setItem('comments', JSON.stringify(allComments));

            return { ...state, commentsData: allComments };
        }

        default: {
            return state;
        }
    }
};

export default comments;
