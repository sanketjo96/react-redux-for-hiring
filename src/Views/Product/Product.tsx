import "./Product.css";
import { ProductControls } from "./ProductControls";

export function Product({ item }) {
  return (
    <div className="product-details">
      <div className="product-container">
        <span>{item.title}</span>
        <span className="product-price">{item.price}</span>
        <ProductControls />
      </div>
    </div>
  );
}
