import React from 'react';

export const StudentFunction = (props) => {
    console.log(props)
    return(
        <div id='functional-component'>
            <h2>Student Function</h2>
            <h3>Name: {props.ucenik.name} </h3>
            <p>Address: {props.ucenik.address}</p>
            <p>College: {props.ucenik.college}</p>
            <p>Index: {props.ucenik.index}</p>
        </div>
    )
}