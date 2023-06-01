import "./styles.css";
import { Provider } from "react-redux";
import configureStore from "./store";

import { ProductCart } from "./Views/Cart";
import { ProductWrapper } from "./Views/Product";
import { mockProducts } from "./Data/mockData";

export default function App() {
  return (
    <Provider store={configureStore()}>
      <div className="App">
        <ProductCart />
        <ProductWrapper products={mockProducts} />
      </div>
    </Provider>
  );
}
