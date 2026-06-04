import React, { createContext, useContext, useState } from "react";

// ======================================================
// Cart Item Type
// ======================================================
export interface CartItem {
  id: string;
  name: string;
  seller: string;
  image: any;
  price: string;
  quantity: number;
}

// ======================================================
// Context Type
// ======================================================
interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  incrementQuantity: (id: string) => void;
  decrementQuantity: (id: string) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
}

// ======================================================
// Create Context
// ======================================================
const CartContext = createContext<CartContextType | null>(null);

// ======================================================
// Cart Provider
// ======================================================
export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  // --------------------------------------------------
  // Cart State
  // --------------------------------------------------
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // --------------------------------------------------
  // Add Item To Cart
  // If item already exists, increase quantity
  // Otherwise add new item
  // --------------------------------------------------
  const addToCart = (newItem: CartItem) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === newItem.id);

      if (existingItem) {
        return prev.map((item) =>
          item.id === newItem.id
            ? {
                ...item,
                quantity: item.quantity + newItem.quantity,
              }
            : item,
        );
      }

      return [...prev, newItem];
    });
  };

  // --------------------------------------------------
  // Increase Item Quantity
  // --------------------------------------------------
  const incrementQuantity = (id: string) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item,
      ),
    );
  };

  // --------------------------------------------------
  // Decrease Item Quantity
  // Minimum quantity is 1
  // --------------------------------------------------
  const decrementQuantity = (id: string) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(1, item.quantity - 1),
            }
          : item,
      ),
    );
  };

  // --------------------------------------------------
  // Remove Single Item
  // --------------------------------------------------
  const removeItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // --------------------------------------------------
  // Remove All Items
  // --------------------------------------------------
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        incrementQuantity,
        decrementQuantity,
        removeItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// ======================================================
// Custom Hook
// Provides easy access to cart context
// ======================================================
export const useCartContext = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCartContext must be used within CartProvider");
  }

  return context;
};
