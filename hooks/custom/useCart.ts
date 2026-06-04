import { useCartContext } from "@/src/context/CartContext";

// ======================================================
// Cart Hook
// Handles cart calculations and exposes cart actions
// ======================================================
export const useCart = () => {
  // --------------------------------------------------
  // Get cart data and actions from context
  // --------------------------------------------------
  const {
    cartItems,
    incrementQuantity,
    decrementQuantity,
    removeItem,
    clearCart,
  } = useCartContext();

  // --------------------------------------------------
  // Calculate subtotal
  // Sum of (price × quantity) for all cart items
  // --------------------------------------------------
  const subTotal = cartItems.reduce((total, item) => {
    const price = parseFloat(item.price.replace("$", ""));

    return total + price * item.quantity;
  }, 0);

  // --------------------------------------------------
  // Calculate tax (8%)
  // --------------------------------------------------
  const tax = subTotal * 0.08;

  // --------------------------------------------------
  // Calculate final total
  // --------------------------------------------------
  const total = subTotal + tax;

  // --------------------------------------------------
  // Data used in the "Price Details" section
  // --------------------------------------------------
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
  // Expose cart data, calculations, and actions
  // --------------------------------------------------
  return {
    cartItems,

    // Cart Actions
    incrementQuantity,
    decrementQuantity,
    removeItem,
    clearCart,

    // Price Details
    orderSummary,
    total: `$${total.toFixed(2)}`,
    subTotal,
    tax,
  };
};
