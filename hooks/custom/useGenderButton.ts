import { useEffect } from "react";
import {
  Easing,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

export const useGenderButton = (selected: boolean) => {
  const progress = useSharedValue(selected ? 1 : 0);

  useEffect(() => {
    progress.value = withTiming(selected ? 1 : 0, {
      duration: 550,
      easing: Easing.out(Easing.cubic),
    });
  }, [selected]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        progress.value,
        [0, 1],
        ["#F6F0D4", "#F7BC5D"],
      ),

      borderColor: interpolateColor(
        progress.value,
        [0, 1],
        ["rgba(31,21,0,0)", "#1F1500"],
      ),

      transform: [
        {
          scale: 1 + progress.value * 0.02,
        },
      ],
    };
  });

  return {
    animatedStyle,
  };
};
