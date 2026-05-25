import { useMemo, useState } from "react";
import { Dimensions } from "react-native";

// Reanimated
import {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

// Orders Data
import ORDER_ITEMS from "@/src/data/order-items.data";

// ======================================================
// Screen Width
// ======================================================

const SCREEN_WIDTH = Dimensions.get("window").width;

// ======================================================
// Toggle Sizes
// ======================================================

const CONTAINER_HORIZONTAL_PADDING = 20;
const TOGGLE_INNER_PADDING = 4;

const TOGGLE_WIDTH =
  SCREEN_WIDTH - CONTAINER_HORIZONTAL_PADDING * 2 - TOGGLE_INNER_PADDING * 2;

// Width of single tab
const BUTTON_WIDTH = TOGGLE_WIDTH / 2;

// ======================================================
// Hook
// ======================================================

export const useMyOrders = () => {
  // ======================================================
  // Active Tab State
  // ======================================================

  const [activeTab, setActiveTab] = useState<"ongoing" | "history">("ongoing");

  // ======================================================
  // Reanimated Shared Value
  // ======================================================

  const translateX = useSharedValue(0);

  // ======================================================
  // Toggle Handler
  // ======================================================

  const handleToggle = (tab: "ongoing" | "history") => {
    // Update tab
    setActiveTab(tab);

    // Animate active background
    translateX.value = withSpring(tab === "ongoing" ? 0 : BUTTON_WIDTH, {
      damping: 50,
      stiffness: 200,
    });
  };

  // ======================================================
  // Animated Style
  // ======================================================

  const animatedToggleStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
      ],
    };
  });

  // ======================================================
  // Filter Orders
  // ======================================================

  const filteredOrders = useMemo(() => {
    return ORDER_ITEMS.filter((item) =>
      activeTab === "ongoing" ? item.isOngoing : !item.isOngoing,
    );
  }, [activeTab]);

  // ======================================================
  // Status Colors
  // ======================================================

  const getStatusStyles = (status: string) => {
    switch (status) {
      case "Out for Delivery":
        return {
          badgeBg: "#DBFFC9",
          textColor: "#0CAA25",
        };

      case "Order placed":
        return {
          badgeBg: "#C9F0FF",
          textColor: "#0C5BAA",
        };

      case "Delivered":
        return {
          badgeBg: "#F7BC5D",
          textColor: "#1F1500",
        };

      case "Cancelled":
        return {
          badgeBg: "#FFC9C9",
          textColor: "#AA0C0C",
        };

      default:
        return {
          badgeBg: "#ECECEC",
          textColor: "#444",
        };
    }
  };

  // ======================================================
  // Return Values
  // ======================================================

  return {
    activeTab,
    handleToggle,
    filteredOrders,
    getStatusStyles,
    animatedToggleStyle,
    BUTTON_WIDTH,
  };
};
