import React from 'react';

export const Users = ({usersList}) => {
    console.log(usersList)
    return(
        <div id='users'>
           {usersList.length > 0 ?
           <table border = {1}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                </tr>
            </thead>
            <tbody>
                {usersList.map(user=>{
                    return(
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                        </tr>
                    )
                })}
            </tbody>
           </table> 
           : 
           <h2>Loading...</h2>}
        </div>
    )
}