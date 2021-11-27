import * as TYPES from '../types';
import CommentService from '../../services/CommentService';

const setPostComments = comments => ({
    type: TYPES.GET_POST_COMMENTS,
    payload: comments,
});

const setNewPostComment = comment => ({
    type: TYPES.ADD_NEW_POST_COMMENT,
    payload: comment,
});

export const getPostComments = id => async dispatch => {
    try {
        const response = await CommentService.getPostComments(id);

        dispatch(setPostComments(response));
    } catch (error) {
        console.log(error);
    }
};

export const addNewPostComment = data => async dispatch => {
    try {
        const response = await CommentService.addPostComment(data);

        dispatch(setNewPostComment(response));
    } catch (error) {
        console.log(error);
    }
};
