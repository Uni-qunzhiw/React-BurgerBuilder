// layout can wrap another component around
import React from 'react';

import classes from '../Layout/Layout.module.css';
import Aux from '../../hoc/Aux';

const layout = (props) => (
    // to handle adjecnet jsx elements, 
    // frist: we could return them in to an array
    // second: we can use higher order components OR react.fragment
    <Aux>
        <div> Toolbar, SideDrawer, Backdrop</div>
        <main className = {classes.Content}>
            {/* output components wrapped with this layout. */}
            {props.children}
        </main>
    </Aux>
    
);

export default layout;