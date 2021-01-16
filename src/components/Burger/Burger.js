import React from 'react';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';
import classes from '../Burger/Burger.module.css';

const burger = (props) => {
   // convert state object (ingridients) to an array;
    let transformedIngredietns = Object.keys(props.ingredients)
        .map( igKey => {
            // underscore sign _ used in map method represents an unused param
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredients key={igKey + i} type = {igKey} />
            });
        })
        .reduce((arr, el) => {    
            return arr.concat(el)
        }, []);
        // reduce function take the accumulator (arr) and concate it with current value (el) 
        // given initial value provided (empty array in this case)
        // therefore arr is [], and it concat with first elemt el in the array
        // in first round

    if(transformedIngredietns.length === 0) {
        transformedIngredietns = <p> Please start adding ingredients!</p>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredients type = "bread-top" />
            {transformedIngredietns}
            <BurgerIngredients type = "bread-bottom" />
        </div>
    );
};

export default burger;