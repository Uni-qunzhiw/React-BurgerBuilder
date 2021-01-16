import React from 'react';

import classes from './Button.module.css';
/*
    with props.children
    we can simply wrap text we want to put
    on button with this Button element
*/
const button = (props) => (
    <button 
    // what we passed to classname shoudl be string, therefore join them together
        className = {[classes.Button, classes[props.btnType]].join(' ')} 
        onClick = {props.clicked}>
            {props.children}
    </button>
);

export default button;