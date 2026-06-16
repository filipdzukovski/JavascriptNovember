import { api } from './../config/properties';
import axios from 'axios';

export const getPosts = (token) => {
    const header = {
        "Accept": 'application/json,*/*',
        "Content-Type": 'application/json',
        "Authorization": "Bearer " + token
    }

    return axios.get(`${api.localRoute}/posts`, { headers: header })
        .then(result => Promise.resolve(result))
        .catch(err => Promise.reject(err))
}