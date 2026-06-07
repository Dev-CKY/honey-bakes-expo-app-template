import CART_ITEMS from "@/src/data/cart-items.data";
import { useMemo, useState } from "react";
import { Alert } from "react-native";

export const useCart = () => {
  const [cartItems, setCartItems] = useState(
    CART_ITEMS.slice(0, 3).map((item) => ({
      id: item.id,
      name: item.name,
      seller: item.seller,
      image: item.image,
      price: item.price,
      quantity: 1,
    })),
  );

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

  const decrementQuantity = (id: string) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const removeItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const subTotal = useMemo(() => {
    return cartItems.reduce((total, item) => {
      const price = Number(item.price.replace("$", ""));

      return total + price * item.quantity;
    }, 0);
  }, [cartItems]);

  const tax = subTotal * 0.08;

  const total = subTotal + tax;

  const orderSummary = [
    {
      label: "Sub total",
      value: `$${subTotal.toFixed(2)}`,
    },
    {
      label: "Tax (8%)",
      value: `$${tax.toFixed(2)}`,
    },
    {
      label: "Delivery fee",
      value: "Free",
    },
  ];

  // --------------------------------------------------
  // Clear Entire Cart
  // --------------------------------------------------
  const handleClearCart = () => {
    Alert.alert(
      "Clear Cart",
      "Are you sure you want to remove all items from your cart?",
      [
        {
          text: "No",
          style: "cancel",
        },
        {
          text: "Yes",
          style: "destructive",
          onPress: clearCart,
        },
      ],
    );
  };

  // --------------------------------------------------
  // Remove Single Item
  // --------------------------------------------------
  const handleRemoveItem = (id: string) => {
    Alert.alert("Remove Item", "Are you sure you want to remove this item?", [
      {
        text: "No",
        style: "cancel",
      },
      {
        text: "Yes",
        style: "destructive",
        onPress: () => removeItem(id),
      },
    ]);
  };

  return {
    cartItems,

    incrementQuantity,
    decrementQuantity,
    removeItem,
    clearCart,

    orderSummary,

    subTotal,
    tax,
    total: `$${total.toFixed(2)}`,

    handleClearCart,
    handleRemoveItem,
  };
};
