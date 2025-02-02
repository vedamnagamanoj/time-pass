import { ShoppingCartIcon, TrashIcon } from "@heroicons/react/16/solid";
import { useCart } from "../context/CartContext";

function CartHeader() {
  const { cart, handleAddItem, handleDeleteCart } = useCart();

  const totalItems = cart.reduce(
    (result, curr) => (result += curr.quantity),
    0
  );

  return (
    <div className="cart-header">
      <button onClick={handleAddItem}>
        <ShoppingCartIcon />
      </button>
      <span>Items: {totalItems}</span>
      <button onClick={handleDeleteCart}>
        <TrashIcon />
      </button>
    </div>
  );
}

export default CartHeader;
