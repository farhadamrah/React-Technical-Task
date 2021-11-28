import * as TYPES from '../types';
import UserService from '../../services/UserService';

const setUsers = users => ({
    type: TYPES.GET_USERS,
    payload: users,
});

const setUser = user => ({
    type: TYPES.GET_USER,
    payload: user,
});

export const removeUser = () => ({ type: TYPES.REMOVE_USER });

export const getUsers = () => async dispatch => {
    try {
        const response = await UserService.getUsersData();

        dispatch(setUsers(response));
    } catch (error) {
        console.log(error);
    }
};

export const getUser = id => async dispatch => {
    try {
        const response = await UserService.getUserData(id);

        dispatch(setUser(response));
    } catch (error) {
        console.log(error);
    }
};
