import axios from 'axios';
import { api } from './../config/properties';

export const LogInUser = (requestParams) => {

    const header = {
        "Content-Type": "application/json"
    }
    const data = { username: requestParams.username, password: requestParams.password }

    return axios.post(`${api.localRoute}/login`, data, { headers: header })
        .then(json => Promise.resolve(json))
        .catch(err => Promise.reject(err))
}