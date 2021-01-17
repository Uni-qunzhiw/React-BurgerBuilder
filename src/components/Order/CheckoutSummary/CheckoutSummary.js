import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.module.css';

const checkoutSummary = (props) => {
    return (
        <div className = {classes.CheckoutSummary}>
            <h1> we hope it tastes well! </h1>
            <div style={{width: '300px', height: '300px', margin: "auto"}}>
                <Burger ingredients = {props.ingredients}/>
            </div>
            <Button btnType = "Danger"
                > Cancel </Button>
            <Button btnType = "Success"
                >Continue</Button>
        </div>
    )
}

export default checkoutSummary;