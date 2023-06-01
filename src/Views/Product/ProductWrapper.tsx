import { connect } from "react-redux";
import { Product } from "./Product";

/**
 * This just holds the list of products from backend along with
 * title and price.
 */
export function ProductWrapperComponent({ products }) {
  return (
    <div className="product-wrapper">
      <div>Please select products: </div>
      {products.map((item) => (
        <Product key={item.id} item={item} />
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  ...state
});

export const ProductWrapper = connect(mapStateToProps)(ProductWrapperComponent);
