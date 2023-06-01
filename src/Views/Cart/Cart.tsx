import { connect } from "react-redux";
import { Product } from "../Product/Product";

function ProductCartComponent({ cartProducts }) {
  console.log(cartProducts);
  return (
    <div className="ProductCart">
      <div>
        {cartProducts.map((item) => (
          <Product key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  cartProducts: state.cartState.products
});

export const ProductCart = connect(mapStateToProps)(ProductCartComponent);
