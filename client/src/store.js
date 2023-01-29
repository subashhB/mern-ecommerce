import { addProductReducer, addProductReviewReducer, deleteProductReducer, getAllProductsReducer, getProductByIdReducer } from "./reducers/productReducers";
import {cartReducer} from './reducers/cartReducers';
import { deleteUserReducer, getAllUsersReducer, loginReducer, registerNewUserReducer, updateUserReducer } from "./reducers/userReducers";
import {combineReducers} from 'redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";

const finalReducer = combineReducers({
    getAllProductsReducer: getAllProductsReducer,
    getProductByIdReducer: getProductByIdReducer,
    cartReducer: cartReducer,
    registerNewUserReducer: registerNewUserReducer,
    loginReducer: loginReducer,
    addProductReviewReducer: addProductReviewReducer,
    updateUserReducer: updateUserReducer,
    getAllUsersReducer: getAllUsersReducer,
    deleteUserReducer: deleteUserReducer,
    deleteProductReducer: deleteProductReducer,
    addProductReducer: addProductReducer
    
})

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')): []

const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null

const initialState={
  cartReducer: {cartItems: cartItems},
  loginReducer: {currentUser: currentUser}
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