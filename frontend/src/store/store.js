// create your store redux here
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// reducers
import { productListReducer } from "../store/reducers/productReducers";

const reducer = combineReducers({
  // combining reducer
  products: productListReducer,
});

// add middleware
const middleware = [thunk];

// initial state
const initialState = {
  // add your initial state here
};

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
