import React, { Component } from 'react';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Aux from "../../hoc/Aux";
import Modal from'../../components/UI/Modal/Modal';
import OrderSummary from  '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
const INGRREDIENT_PRICE = {
    salad: 1,
    cheese: 1,
    meat: 3,
    bacon: 2
}

class BurgerBuilder extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {...}
    // }

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasable : false,
        purchasing: false,
        loading: false
    };
    // if not using arrow function, cannot use "this"
    purchaseHandler = () => {
        this.setState({purchasing : true});
    };

    // have to receive updated ingredients otherwise we might not be able to access
    // to updated ingredients when setstate is called.
    updatePurchaseState (ingredients) {

        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey];
            })
            .reduce((sum, cur) => {
                return sum + cur; 
            }, 0);
        this.setState({purchasable: sum > 0});
    };

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCounted = oldCount + 1;
        // update in immutable way;
        const updatedIngredients = {
           ...this.state.ingredients 
        };
        updatedIngredients[type] = updatedCounted;
        const priceAddition = INGRREDIENT_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
        this.updatePurchaseState(updatedIngredients);
    };



    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if( oldCount <= 0) {
            return;
        }
        const updatedCounted = oldCount - 1;
        // update in immutable way;
        const updatedIngredients = {
           ...this.state.ingredients 
        };
        updatedIngredients[type] = updatedCounted;
        const priceDeduction = INGRREDIENT_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    };

    purchaseCancleHandler =  () => (
        this.setState({purchasing: false})
    )
    purchaseContinueHandler = () => {
        // alert('You continue!');
        this.setState( { loading: true } );
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: 'Max Schwarzmüller',
                address: {
                    street: 'Teststreet 1',
                    zipCode: '41351',
                    country: 'Germany'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest'
        }
        axios.post( '/orders.json', order )
            .then( response => {
                this.setState( { loading: false, purchasing: false } );
            } )
            .catch( error => {
                this.setState( { loading: false, purchasing: false } );
            } );
    }

    render () {
        const disabledInfo = {
            ...this.state.ingredients
        };

        for( let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        
        let orderSummary = <OrderSummary 
            summary = {this.state.totalPrice.toFixed(2)}
            purchaseCanceled = {this.purchaseCancleHandler}
            purchaseContinue = {this.purchaseContinueHandler}
            ingredients = {this.state.ingredients} />
       
        if(this.state.loading) {
            orderSummary = <Spinner />
        }

        return (
            <Aux>
                <Modal 
                    show={this.state.purchasing} 
                    modalClosed = {this.purchaseCancleHandler}>
                        {/* if spinner doesnt show, check modal.js */}
                        {orderSummary}
                </Modal>
                <Burger ingredients = {this.state.ingredients}/>
                <BuildControls 
                    ingredientAdded = {this.addIngredientHandler}
                    ingredientDeleted = {this.removeIngredientHandler}
                    disabled={disabledInfo}
                    purchasable = {this.state.purchasable}
                    ordered = {this.purchaseHandler}
                    price={this.state.totalPrice} />
            </Aux>
        );
    }
}

export default withErrorHandler(BurgerBuilder, axios);
