import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buyCake,restockCakes } from './../actions/CakeActions';

//za Domashna:
// Da se zamenat buttons za buy cake so input field kade ke se vnese brojka i ke se odzeme toj broj na torti od vkupniot 
// (vnimavajte na validacii i vnes vo input),na isti princip da se reshi i restock na cakes so input koj ke dodava na tekovniot broj na 
// torti kako i komentarot koj bese ostaven vo zadacata za resavanje na broj na torti so message namesto disabled buttons. 

export const Cake = () => {
    const dispatch = useDispatch();
    const cakes = useSelector(state => state.CakeReducer.cakes);

    return (
        <div id='cake'>
            <h2>Cakes: {cakes}</h2>
            <button disabled={cakes < 1} onClick={() => { dispatch(buyCake(1)) }}>Buy 1 Cake</button>
            <button disabled={cakes < 2} onClick={() => { dispatch(buyCake(2)) }}>Buy 2 Cakes</button>
            <button disabled={cakes < 3} onClick={() => { dispatch(buyCake(3)) }}>Buy 3 Cakes</button>
            <button onClick={()=>{dispatch(restockCakes())}}>Restock Cakes</button>
        </div>
    )
}