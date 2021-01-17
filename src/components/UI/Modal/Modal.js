import React, {Component} from 'react';

import classes from '../Modal/Modal.module.css';
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        // we have to monitor if the children in modal is changed for spinner.
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    comppnentDidUpdate() {
        console.log("[Modal] did update");
    }

    render () {
        return (
            <Aux>
                <Backdrop show = {this.props.show} clicked = {this.props.modalClosed}/>
                <div 
                    className = {classes.Modal}
                    style = {{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    {this.props.children}  
                </div>
            </Aux>
        );
    }
}
export default Modal;