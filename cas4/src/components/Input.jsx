import React from 'react';

export const Input = ({ type, name, placeholder, value, onChange, changeInputType }) => {
    return (
        <p>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            {name === 'passwordField' &&
                <button onClick={changeInputType} type='button' className="eye-button">
                    <i className={type === "password" ? "fa fa-eye-slash" : "fa fa-eye"}></i>
                </button>}
        </p>
    )
}