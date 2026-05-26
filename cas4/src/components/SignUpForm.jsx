// Da se kreira sign up forma (so min 5 polinja) i button koj na klik ke gi prikaze vnesenite
// vrednosti vo edna tabela, a na povtoren klik ke ja trgne (skrie) tabelata.

import React, { useState } from 'react';

export const SignUpForm = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [age, setAge] = useState(0);
    const [showTable,setShowTable] = useState(true)

    // function setirajIme(e){
    //     console.log(e)
    //     debugger;
    // }

    return (
        <div id='sign-up-form'>
            <h2>Sign Up</h2>
            <input
                type='text'
                placeholder='Enter First Name'
                value={firstName}
                onChange={(e) => { setFirstName(e.target.value) }}
            />
            <br />
            <br />
            <input
                type='text'
                placeholder='Enter Last Name'
                value={lastName}
                onChange={(e) => { setLastName(e.target.value) }}
            />
            <br />
            <br />
            <input
                type='email'
                placeholder='Enter Email Address'
                value={email}
                onChange={(e) => { setEmail(e.target.value) }}
            />
            <br />
            <br />
            <input
                type='password'
                placeholder='Enter Password'
                value={password}
                onChange={(e) => { setPassword(e.target.value) }}
            />
            <br />
            <br />
            <input
                type='number'
                placeholder='Enter Age'
                value={age}
                onChange={(e) => { setAge(+e.target.value) }}
            />
            <br />
            <br />
            <button onClick={()=>{setShowTable(!showTable)}}>
                {showTable ? 'Hide Values' : 'Show Values'}
            </button>
            <br />
            <br />
          {showTable && <table border={1}>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{firstName}</td>
                        <td>{lastName}</td>
                        <td>{email}</td>
                        <td>{password}</td>
                        <td>{age}</td>
                    </tr>
                </tbody>
            </table>}
        </div>
    )
}