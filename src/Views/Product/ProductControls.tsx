import { connect } from "react-redux";
import "./Product.css";
import {
  getRemoveProductAction,
  getAddProductAction
} from "../../reducers/cartReducer/cartActions";

/**
 * This component holds user interactions with product.
 * 1. This component will be used both in list and cart component. Please customize.
 * 2. Integrate product controls with redux store
 * and dispatch actions
 */
export function ProductControlsComponent(props) {
  return (
    <div className="product-controls">
      <button>Add</button>
      <button>Remove</button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addProduct: (payload) => dispatch(getAddProductAction(payload)),
  removeProduct: (payload) => dispatch(getRemoveProductAction(payload))
});

export const ProductControls = connect(
  null,
  mapDispatchToProps
)(ProductControlsComponent);
