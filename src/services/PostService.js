import axios from 'axios';
import { ENV } from '../config/env';

const PostService = {};

PostService.getPosts = async id => {
    const result = await axios.get(`${ENV.baseApiUrl}/users/${id}/posts`);

    return result.data;
};

PostService.getPost = async id => {
    const result = await axios.get(`${ENV.baseApiUrl}/posts/${id}`);

    return result.data;
};

PostService.addPost = async data => {
    const { userId, values } = data;

    // localStorage.setItem('newPost', JSON.stringify(data));

    const result = await axios.post(`${ENV.baseApiUrl}/users/${userId}/posts`, values);

    return result.data;
};

PostService.deletePost = async id => {
    const result = await axios.delete(`${ENV.baseApiUrl}/posts/${id}`);

    return result.data;
};

export default PostService;
