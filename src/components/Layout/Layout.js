// layout can wrap another component around
import React from 'react';

import classes from '../Layout/Layout.module.css';
import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/ToolBar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
const layout = (props) => (
    // to handle adjecnet jsx elements, 
    // frist: we could return them in to an array
    // second: we can use higher order components OR react.fragment
    <Aux>
        <Toolbar />
        <SideDrawer />
        <main className = {classes.Content}>
            {/* output components wrapped with this layout. */}
            {props.children}
        </main>
    </Aux>
    
);

export default layout;