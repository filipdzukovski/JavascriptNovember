import { logInSuccess, logInFailed, logOutUser } from "./actions";
import { LogInUser } from "../../api/authApi";

export const logIntoApp = (requestParams) => {
    return dispatch => {
        return LogInUser(requestParams)
            .then(res => {
                dispatch(logInSuccess(res.data))
                return res.data;
            })
            .catch(err => {
                dispatch(logInFailed(err))
                return err;
            })
    }
}