import React from 'react';
import './StyledInput.css'

const StyledInput = ({htmlFor, type, placeholder, value, onChange, children, ...props}) => {
    return (
        <p className={'styledInput'}>
            <label htmlFor={htmlFor}>{children}</label><br/>
            <input type={type} placeholder={placeholder} value={value}
                   onChange={onChange}/>
        </p>
    );
};

export default StyledInput;