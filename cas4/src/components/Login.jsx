import React, { useState, useEffect } from 'react';
import { Input } from './Input';
import { Dropdown } from './Dropdown';

export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [inputType, setInputType] = useState('password');
    const [selectedOption, setSelectedOption] = useState(1);


    useEffect(() => {
        console.log("Username: ", username);
        console.log("Password: ", password)
    }, [username, password]) //componentDidUpdate

    const elements = [
        { value: 1, name: "Facebook" },
        { value: 2, name: "Instagram" },
        { value: 3, name: "TikTok" }
    ]

    function changeInputType() {
        setInputType(inputType === 'password' ? 'text' : 'password')
    }

    function showValues(e) {
        e.preventDefault();
        alert(`Username:${username}\nPassword:${password}\nApp:${selectedOption}`)
    }

    return (
        <div id='login'>
            <form onSubmit={showValues}>
                <Input
                    type={"text"}
                    placeholder={"Enter Username"}
                    value={username}
                    onChange={(e) => { setUsername(e.target.value) }}
                />
                <Input
                    type={inputType}
                    placeholder={"Enter Password"}
                    value={password}
                    onChange={(e) => { setPassword(e.target.value) }}
                    changeInputType={changeInputType}
                    name="passwordField"
                />
                <Dropdown elements={elements} onChange={(e) => { setSelectedOption(e.target.value) }} />
                <button className='action-button'>Sign In</button>
            </form>
        </div>
    )
}