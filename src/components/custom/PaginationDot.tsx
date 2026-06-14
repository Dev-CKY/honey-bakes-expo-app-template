import React, { useEffect } from "react";
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

const PaginationDot = ({ active }: { active: boolean }) => {
  const progress = useSharedValue(active ? 1 : 0);

  useEffect(() => {
    progress.value = withSpring(active ? 1 : 0, {
      damping: 18,
      stiffness: 180,
      mass: 0.8,
    });
  }, [active]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: 8 + progress.value * 20,
      height: 8,
      borderRadius: 20,

      transform: [
        {
          scale: 1 + progress.value * 0.15,
        },
      ],

      opacity: 0.5 + progress.value * 0.5,

      backgroundColor: interpolateColor(
        progress.value,
        [0, 1],
        ["#C6B8A3", "#1F1500"],
      ),
    };
  });

  return (
    <Animated.View
      style={[
        {
          marginHorizontal: 4,
        },
        animatedStyle,
      ]}
    />
  );
};

export default PaginationDot;
