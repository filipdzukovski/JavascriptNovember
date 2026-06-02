import React from 'react';
import {Link} from 'react-router-dom';

export const NotFound = () =>{
    return(
        <div id='not-found'>
            <h1>Error !!! No Routes match this url</h1>
            <h2>Go <Link to='/'>back</Link> to Home</h2>
        </div>
    )
}