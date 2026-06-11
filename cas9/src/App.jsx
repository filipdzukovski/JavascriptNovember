import React from 'react';
import Hello from './components/Hello';
import {HelloFunc} from './components/HelloFunc';

export function App(){

  return(
    <div id='app'>
        <h2>App</h2>
        {/* <Hello/> */}
        <HelloFunc/>
    </div>
  )
}