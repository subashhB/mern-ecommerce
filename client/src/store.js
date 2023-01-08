import { getAllProductsReducer, getProductByIdReducer } from "./reducers/productReducers";
import {cartReducer} from './reducers/cartReducers';
import { registerNewUserReducer } from "./reducers/userReducers";
import {combineReducers} from 'redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";

const finalReducer = combineReducers({
    getAllProductsReducer: getAllProductsReducer,
    getProductByIdReducer: getProductByIdReducer,
    cartReducer: cartReducer,
    registerNewUserReducer: registerNewUserReducer
})

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')): []

const initialState={
  cartReducer: {cartItems: cartItems}
}

const composeEnhancers = composeWithDevTools({
    // Specify here name, actionsBlacklist, actionsCreators and other options
  });
  
const store = createStore(
    finalReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(thunk)
      // other store enhancers if any
    )
  )
export default store