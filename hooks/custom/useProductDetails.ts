import { PRODUCT_ITEMS } from "@/src/data/product-items.data";
import { useLocalSearchParams } from "expo-router";
import { useMemo, useState } from "react";

export const useProductDetails = () => {
  const { id } = useLocalSearchParams();

  const product = PRODUCT_ITEMS.find((item) => item.id === String(id));

  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const isVeg = product?.foodType.toLowerCase() === "veg";

  const filledStars = product ? Math.floor(product.rating) : 0;

  const stars = Array.from({ length: 5 }, (_, index) => ({
    id: index,
    filled: index < filledStars,
  }));

  const totalPrice = useMemo(() => {
    if (!product) return "$0.00";

    const basePrice = Number(product.price.replace("$", ""));

    return `$${(basePrice * quantity).toFixed(2)}`;
  }, [product, quantity]);

  return {
    product,
    isVeg,
    stars,
    quantity,
    totalPrice,
    increaseQuantity,
    decreaseQuantity,
  };
};
