import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';

import classes from './Logo.module.css';

const logo = (props) => (
    <div className = {classes.Logo}>
        {/* import logo rather than get from local path */}
        <img src={burgerLogo}  alt= 'MyBurger'/>
    </div>
);

export default logo;