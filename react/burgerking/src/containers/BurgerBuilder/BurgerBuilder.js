import React, { Component } from 'react';
import Aux from '../../hoc/aux'
import Burger from '../../components/Layout/Burger/Burger'

class Bugerbuilder extends Component {
    state = {
        ingredients: {
            salad: 1,
            bacon: 1,
            cheese: 2,
            meat: 2
        }
    }
    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}></Burger>
            </Aux>
        );
    }
}

export default Bugerbuilder;