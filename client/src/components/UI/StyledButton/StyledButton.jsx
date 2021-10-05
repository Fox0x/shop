import './StyledButton.css'
import React from 'react';

const StyledButton = ({children, ...props}) => {
    return (
        <button {...props} className={'styledButton'}>
            {children}
        </button>
    );
};

export default StyledButton;