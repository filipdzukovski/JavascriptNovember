import { setUserStorage,removeUserStorage } from '../../config/StorageFunctions';
import {
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    LOGOUT_USER
} from './constants';

const initialState = {
    token: null,
    user: null
}


export default function reducer(state = initialState, action) {

    switch (action.type) {

        case LOGIN_SUCCESS:
            setUserStorage(action.payload.token, action.payload.username);
            return {
                ...state,
                token: action.payload.token,// action.payload {username:"",token:""}
                user: action.payload.username
            }
        case LOGIN_FAILED:
            return{
                ...state,
            }
        case LOGOUT_USER:
            removeUserStorage();
            return{
                ...state,
                token:null,
                user:null
            }


        default: return state;
    }

}