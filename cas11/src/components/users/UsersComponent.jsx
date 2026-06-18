import React from 'react';
//za domashna: da se dodade delete na users vo redux
export const UsersComponent = ({listOfUsers,errorMessage,deleteUser}) => {

    return (
        <div id='users-component'>
            {!errorMessage ?
            
            <table border = {1}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Username</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {listOfUsers.map(user=>{
                        return(
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.username}</td>
                                <td><button onClick={()=>{deleteUser(user.id)}}>Delete</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table> 
            
            : <h1>{errorMessage}</h1>}
        </div>
    )
}