import { getToken } from './../config/StorageFunctions';
import { Navigate, Outlet } from 'react-router-dom';
import {useSelector} from 'react-redux';

export const PrivateRoute = ({ redirectPath = '/login', children }) => {
    const reduxToken = useSelector(state=>state.authReducer.token);
    const token = reduxToken || getToken();

    if (!token) {
        return <Navigate to={redirectPath} />
    }

    return children ? children : <Outlet />
}