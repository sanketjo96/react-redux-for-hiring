import { createStore } from "redux";
import rootReducer from "./reducers/rootReducer";

function configureStore(state = { cartState: { products: [] } }) {
  return createStore(rootReducer, state);
}
export default configureStore;
