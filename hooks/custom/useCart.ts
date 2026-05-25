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

  const orderSummary = [
    { label: "Sub total", value: "₹100" },
    { label: "Tax", value: "8%" },
    { label: "Delivery fee", value: "Free" },
  ];

  return {
    cartItems,
    incrementQuantity,
    decrementQuantity,
    orderSummary,
  };
};
