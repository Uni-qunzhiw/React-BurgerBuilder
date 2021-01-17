// layout can wrap another component around
import React, {Component} from 'react';

import classes from '../Layout/Layout.module.css';
import Aux from '../Aux';
import Toolbar from '../../components/Navigation/ToolBar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
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