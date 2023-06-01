import { combineReducers } from "redux";

import { cartReducer } from "./cartReducer/cartReducer";

export default combineReducers({
  cartState: cartReducer
});
