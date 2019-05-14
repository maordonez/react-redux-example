import {createStore} from 'redux'

const reducer = (state, action) => {

    if(action.type === 'ADD_TO_CARD' ){
        return {
            ...state,
            cart: state.cart.concat(action.product)
        };
    }
    return state;
}

export default createStore(reducer, {cart: []});