import React from 'react';
import {Hello} from './Hello';
import Card from './Card';

export function App() {

  var broj = 13;
  const fraza = 'string vrednost';
  let karakter = 'c';

  return (
     <div id='app'>
      <Card/>
      <Hello/>
      <h2>Filip</h2>
      <Hello/>
        <h4>Brojot koj sto sum go napisal e: {broj}</h4>
      <p>{5+3}</p>
      <h6>Fraza na denot: {fraza}</h6>
      <Hello/>
      <h1>{karakter}</h1>

     
     </div>
  )
}

// export default App;
//<>  </> - React.Fragment