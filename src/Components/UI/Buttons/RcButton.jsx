import React from 'react';
import classes from './RcButton.module.scss'

const RcButton = ({children, ...props}) => {

    return (
        <button {...props} className={ classes.RcButton }>
            {children}
        </button>
    );
};

export default RcButton;