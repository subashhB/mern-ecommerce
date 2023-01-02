import { getAllProductsReducer } from "./reducers/productReducers";
import {combineReducers} from 'redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";

const finalReducer = combineReducers({
    getAllProductsReducer: getAllProductsReducer
})

const composeEnhancers = composeWithDevTools({
    // Specify here name, actionsBlacklist, actionsCreators and other options
  });
  
const store = createStore(
    finalReducer,
    composeEnhancers(
      applyMiddleware(thunk)
      // other store enhancers if any
    )
  )
export default store