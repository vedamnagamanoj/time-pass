import { createContext, useContext, useState } from "react";

const CartContext = createContext();

let itemNum = 0;

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const handleAddItem = () => {
    const newItem = {
      id: Date.now(),
      name: `Item - ${++itemNum}`,
      quantity: 1,
    };
    setCart((currState) => [...currState, newItem]);
  };

  const handleIncreaseItem = (id) =>
    setCart((currCart) =>
      currCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );

  const handleDecreaseItem = (id) =>
    setCart((currCart) =>
      currCart.map((item) => {
        if (item.id === id) {
          if (item.quantity === 1) return item;
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      })
    );

  const handleDeleteItem = (id) =>
    setCart((currCart) => currCart.filter((item) => id !== item.id));

  const handleDeleteCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        handleAddItem,
        handleIncreaseItem,
        handleDecreaseItem,
        handleDeleteItem,
        handleDeleteCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);

  if (context === undefined)
    throw new Error("The cart context was used outside its provider");
  else return context;
}

export { CartProvider, useCart };
