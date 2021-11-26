import axios from 'axios';
import { ENV } from '../config/env';

const CommentService = {};

CommentService.getPostComments = async id => {
    const result = await axios.get(`${ENV.baseApiUrl}/posts/${id}/comments`);

    return result.data;
};

CommentService.addPostComment = async data => {
    const { postId, values } = data;

    const result = await axios.post(`${ENV.baseApiUrl}/posts/${postId}/comments`, values);

    return result.data;
};

export default CommentService;
