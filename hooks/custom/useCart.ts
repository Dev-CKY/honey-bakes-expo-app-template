import CART_ITEMS from "@/src/data/cart-items.data";
import { useState } from "react";

export const useCart = () => {
  // Local state
  const [cartItems, setCartItems] = useState(CART_ITEMS);

  const incrementQuantity = (id: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const decrementQuantity = (id: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity > 1 ? item.quantity - 1 : 1,
            }
          : item,
      ),
    );
  };

  return {
    cartItems,
    incrementQuantity,
    decrementQuantity,
  };
};
