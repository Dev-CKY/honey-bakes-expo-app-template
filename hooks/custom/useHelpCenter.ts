import { useState } from "react";
import { Dimensions } from "react-native";

// Reanimated
import {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

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
// Types
// ======================================================

export type HelpCenterTab = "faqs" | "contact-us";

// ======================================================
// Hook
// ======================================================

export const useHelpCenter = () => {
  // ======================================================
  // Active Tab State
  // ======================================================

  const [activeTab, setActiveTab] = useState<HelpCenterTab>("faqs");

  // ======================================================
  // Reanimated Shared Value
  // ======================================================

  const translateX = useSharedValue(0);

  // ======================================================
  // Toggle Handler
  // ======================================================

  const handleToggle = (tab: HelpCenterTab) => {
    setActiveTab(tab);

    translateX.value = withSpring(tab === "faqs" ? 0 : BUTTON_WIDTH, {
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
  // Return Values
  // ======================================================

  return {
    activeTab,
    handleToggle,
    animatedToggleStyle,
    BUTTON_WIDTH,
  };
};
