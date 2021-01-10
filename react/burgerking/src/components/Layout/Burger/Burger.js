import React from 'react'
import classes from './Burger.module.css'
import BurgerIngredients from './BurgerIngredients/BurgerIngredients'

const Burger = (props) => {

    const ingredients = Object.keys(props.ingredients).map(igkey => {
        return [...Array(props.ingredients[igkey])].map((_, i) => <BurgerIngredients key={igkey + i} type={igkey} ></BurgerIngredients>
        )
    })

    return (
        <div className={classes.Burger}>
            <BurgerIngredients type='bread-top' />
            {ingredients}
            <BurgerIngredients type='bread-bottom' />
        </div>
    );
}

export default Burger;