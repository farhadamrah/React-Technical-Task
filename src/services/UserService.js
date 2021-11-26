import axios from 'axios';
import { ENV } from '../config/env';

const UserService = {};

UserService.getUsersData = async () => {
    const result = await axios.get(`${ENV.baseApiUrl}/users`);

    return result.data;
};

UserService.getUser = async id => {
    const result = await axios.get(`${ENV.baseApiUrl}/users/${id}`);

    return result.data;
};

export default UserService;
