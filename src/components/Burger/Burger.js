import React from 'react';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';
import classes from '../Burger/Burger.module.css';

const burger = (props) => {
   // convert state object (ingridients) to an array;
    const transformedIngredietns = Object.keys(props.ingredients)
        .map( igKey => {
            // underscore sign _ used in map method represents an unused param
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredients key={igKey + i} type = {igKey} />
        });
    });
    console.log(transformedIngredietns);
    return (
        <div className={classes.Burger}>
            <BurgerIngredients type = "bread-top" />
            {transformedIngredietns}
            <BurgerIngredients type = "bread-bottom" />
        </div>
    );
};

export default burger;