import * as TYPES from '../types';
import PostService from '../../services/PostService';

const setUserPosts = posts => ({
    type: TYPES.GET_USER_POSTS,
    payload: posts,
});

export const removeUserPosts = () => ({ type: TYPES.REMOVE_USER_POSTS });

const setUserPost = post => ({
    type: TYPES.GET_USER_POST,
    payload: post,
});

export const removeUserPost = () => ({ type: TYPES.REMOVE_USER_POST });

const setNewUserPost = post => ({
    type: TYPES.ADD_NEW_USER_POST,
    payload: post,
});

export const deleteUserPost = id => ({
    type: TYPES.DELETE_USER_POST,
    payload: id,
});

export const getUserPosts = id => async dispatch => {
    try {
        const response = await PostService.getPosts(id);

        dispatch(setUserPosts(response));
    } catch (error) {
        console.log(error);
    }
};

export const getUserPost = id => async dispatch => {
    try {
        const response = await PostService.getPost(id);

        dispatch(setUserPost(response));
    } catch (error) {
        console.log(error);
    }
};

export const addNewUserPost = data => async dispatch => {
    try {
        const response = await PostService.addPost(data);

        dispatch(setNewUserPost(response));
    } catch (error) {
        console.log(error);
    }
};

export const deletePost = id => async dispatch => {
    try {
        const response = await PostService.deletePost(id);

        dispatch(deleteUserPost(id));

        return response;
    } catch (error) {
        console.log(error);
    }
};
