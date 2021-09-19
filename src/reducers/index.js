import { combineReducers } from "redux";
import { productsReducer } from "./products";
import { cartReducer } from "./cart";
import { userReducer } from "./user";
import { loadingBarReducer } from "react-redux-loading-bar";

export const reducers = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  user: userReducer,
  loadingBar: loadingBarReducer,
});
