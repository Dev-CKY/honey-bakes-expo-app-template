import WISHLIST_ITEMS from "@/src/data/wishlist-items.data";
import { useState } from "react";
import { Alert } from "react-native";

export const useWishlist = () => {
  const [wishlistItems, setWishlistItems] = useState(WISHLIST_ITEMS);

  const removeItem = (id: string) => {
    setWishlistItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearWishlist = () => {
    setWishlistItems([]);
  };

  const handleRemoveItem = (id: string) => {
    Alert.alert(
      "Remove Item",
      "Are you sure you want to remove this item from your wishlist?",
      [
        {
          text: "No",
          style: "cancel",
        },
        {
          text: "Yes",
          style: "destructive",
          onPress: () => removeItem(id),
        },
      ],
    );
  };

  const handleClearWishlist = () => {
    Alert.alert(
      "Clear Wishlist",
      "Are you sure you want to remove all items from your wishlist?",
      [
        {
          text: "No",
          style: "cancel",
        },
        {
          text: "Yes",
          style: "destructive",
          onPress: clearWishlist,
        },
      ],
    );
  };

  return {
    wishlistItems,
    removeItem,
    clearWishlist,
    handleRemoveItem,
    handleClearWishlist,
  };
};
