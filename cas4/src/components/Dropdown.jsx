import React from 'react';

export const Dropdown = ({elements,onChange}) => {
    return (
        <p>
            <label htmlFor="app-select">Chose an App</label>
            <select id='app-select' onChange={onChange}>
                {elements.map((item,i)=>(
                    <option key={i} value={item.value}>{item.name}</option>
                ))}
            </select>
        </p>
    )
}