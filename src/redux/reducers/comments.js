import * as TYPES from '../types';

const initialState = {
    commentsData: [],
};

const comments = (state = initialState, action) => {
    const { payload } = action;

    switch (action.type) {
        case TYPES.GET_POST_COMMENTS: {
            return { ...state, commentsData: payload };
        }

        case TYPES.ADD_NEW_POST_COMMENT: {
            return { ...state, commentsData: [...state.commentsData, payload] };
        }

        default: {
            return state;
        }
    }
};

export default comments;
