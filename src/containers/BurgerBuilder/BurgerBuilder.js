import React, { Component } from 'react';

import Burger from '../../components/Burger/Burger';
import Aux from "../../hoc/Aux";

class BurgerBuilder extends Component {
    render () {
        return (
            <Aux>
                <div>Burger</div>
                <div>Build Controls</div>
                <Burger />
            </Aux>
        );
    }
}

export default BurgerBuilder;
