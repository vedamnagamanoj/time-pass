import { useCart } from "../context/CartContext";
import Product from "./Product";

function ProductsList() {
  const { cart } = useCart();

  return (
    <div className="product-list">
      <ul>
        {cart.map((item) => (
          <Product item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

export default ProductsList;
