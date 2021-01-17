// layout can wrap another component around
import React, {Component} from 'react';

import classes from '../Layout/Layout.module.css';
import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/ToolBar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
class Layout extends Component{

    state = {
        showSideDrawer : false
    }

    sideDrawerClosedHandler = () =>{
        this.setState({showSideDrawer: false})
    };

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer : !prevState.showSideDrawer}})
    };

    render () {
        return (
            <Aux>
                <Toolbar DrawerToggleClicked = {this.sideDrawerToggleHandler}/>
                <SideDrawer 
                    open = {this.state.showSideDrawer}
                    closed = {this.sideDrawerClosedHandler}/>
                <main className = {classes.Content}>
                    {/* output components wrapped with this layout. */}
                    {this.props.children}
                </main>
            </Aux>
        )
    }
};

export default Layout;