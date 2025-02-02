import { useCart } from "../context/CartContext";

function Product({ item }) {
  const { handleDeleteItem, handleDecreaseItem, handleIncreaseItem } =
    useCart();

  return (
    <li>
      <div className="product-list-item">
        <button className="btn" onClick={() => handleDeleteItem(item.id)}>
          x
        </button>
        <span>{item.name}</span>
        <div className="counter">
          <button className="btn" onClick={() => handleDecreaseItem(item.id)}>
            -
          </button>
          <span>{item.quantity}</span>
          <button className="btn" onClick={() => handleIncreaseItem(item.id)}>
            +
          </button>
        </div>
      </div>
    </li>
  );
}

export default Product;
