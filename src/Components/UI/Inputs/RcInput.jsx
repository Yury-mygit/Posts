import React from 'react';
import classes from "./RcInput.module.scss";

const RcInput = React.forwardRef((props, ref) => {
    return (
        <input ref={ref} className={classes.RcInput} {...props}>

        </input>
    );
});

export default RcInput;