import {
    fetchUsersRequest,
    fetchUsersSuccess,
    fetchUsersFail,
    removeUsersRequest,
    removeUsersSuccess,
    removeUsersFail
} from './actions';
import { getUsers, deleteUsers } from './../../../api/usersApi';

export const fetchUsers = (requestParams) => {
    return dispatch => {
        dispatch(fetchUsersRequest(requestParams))
        return getUsers(requestParams)
            .then(result => {
                dispatch(fetchUsersSuccess(result))
                return result;
            })
            .catch(err => {
                dispatch(fetchUsersFail(err))
                return err;
            })
    }

}

export const removeUsers = (requestParams) => {
    return dispatch => {
        dispatch(removeUsersRequest(requestParams))
        return deleteUsers(requestParams)
            .then(result => {
                dispatch(removeUsersSuccess(result))
                return result;
            })
            .catch(err => {
                dispatch(removeUsersFail(err));
                return err;
            })
    }
}

