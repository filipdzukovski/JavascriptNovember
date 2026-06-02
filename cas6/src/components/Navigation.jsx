import React from 'react';
import { Link } from 'react-router-dom';

export const Navigation = () => {
    return (
        <ul id='nav'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <ul>
                <li><Link to='/about/us'>Us</Link></li>
            </ul>
            <li><Link to='/contact'>Contact</Link></li>
            <li><Link to='/users'>Users</Link></li>
        </ul>
    )
}