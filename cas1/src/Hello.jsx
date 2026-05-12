import React from 'react';
import {Goodbye} from './Goodbye';

export class Hello extends React.Component {

    render() {
        return (
            <>
                <h2 style={{color:'red',backgroundColor:'blue'}} >test</h2>
                <h1>Class Component</h1>
                <Goodbye/>
            </>
        )
    }
}