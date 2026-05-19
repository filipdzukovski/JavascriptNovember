import React from 'react';

export const FruitList = ({listaNaOvosje}) => {
    console.log(listaNaOvosje)
    return(
        <div id='fruit-list'>
            <h2>FruitList: </h2>
            <ul>
                {/* {listaNaOvosje.map((ovosje,i)=>{
                    return(
                        <li>{ovosje}</li>
                    )
                })} */}
                {listaNaOvosje.map((ovosje,i)=>(
                    <li key={i}>{ovosje}</li>
                ))}
            </ul>
        </div>
    )
}