// hooks/useLineProgressAnimation.ts

import { useEffect } from "react";
import {
  cancelAnimation,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

interface LineProgressConfig {
  duration?: number;
}

export const useLineProgressAnimation = (config: LineProgressConfig = {}) => {
  const { duration = 3000 } = config;

  const lineProgress = useSharedValue(0);

  useEffect(() => {
    lineProgress.value = withTiming(1, { duration });

    return () => {
      cancelAnimation(lineProgress);
    };
  }, [duration]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: `${lineProgress.value * 100}%`,
    };
  });

  return animatedStyle;
};
