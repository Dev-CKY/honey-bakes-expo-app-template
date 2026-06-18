import { useEffect } from "react";
import {
  cancelAnimation,
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";

interface PulseAnimationConfig {
  duration?: number;
  scaleRange?: [number, number];
  opacityRange?: [number, number];
}

export const usePulseAnimation = (config: PulseAnimationConfig = {}) => {
  const {
    duration = 2000,
    scaleRange = [0.8, 1.2],
    opacityRange = [0.3, 1],
  } = config;

  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withRepeat(
      withSequence(withTiming(1, { duration }), withTiming(0, { duration })),
      -1,
      true,
    );

    return () => {
      cancelAnimation(progress);
    };
  }, [duration]);

  const animatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      progress.value,
      [0, 0.5, 1],
      [scaleRange[0], scaleRange[1], scaleRange[0]],
      Extrapolation.CLAMP,
    );
    const opacity = interpolate(
      progress.value,
      [0, 0.5, 1],
      [opacityRange[0], opacityRange[1], opacityRange[0]],
      Extrapolation.CLAMP,
    );
    return {
      transform: [{ scale }],
      opacity,
    };
  });

  return animatedStyle;
};
