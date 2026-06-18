import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UsersComponent } from './UsersComponent';
import {fetchUsers,removeUsers} from './duck/operations';

export default function UsersContainer() {

    const dispatch = useDispatch();
    const users = useSelector(state => state.usersReducer.users);
    const errorMessage = useSelector(state => state.usersReducer.message);

    useEffect(()=>{
        dispatch(fetchUsers())
    },[])

    function deleteUser(userId){
        console.log("USERID::::",userId)
        dispatch(removeUsers(userId))
    }

    return (
        <div id='users-container'>
            <UsersComponent listOfUsers={users} errorMessage={errorMessage} deleteUser={deleteUser} />
        </div>
    )
}