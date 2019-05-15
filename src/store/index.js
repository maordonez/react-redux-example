import {createStore} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = (state, action) => {
    
    if(action.type === 'ADD_TO_CARD' ){
        return {
            ...state,
            cart: state.cart.concat(action.cart)
        };
    }
    return state;
}

export default createStore(reducer, {cart: []},composeWithDevTools( ));