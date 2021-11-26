import { combineReducers } from 'redux';
import users from './users';
import posts from './posts';
import comments from './comments';

const rootReducer = combineReducers({ users, posts, comments });

export default rootReducer;
