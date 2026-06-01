import { useEffect } from "react";
import { Image } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withSpring,
  withTiming,
} from "react-native-reanimated";

export const AnimatedImage = Animated.createAnimatedComponent(Image);

export const useOrderPlaced = () => {
  const floating = useSharedValue(0);
  const scale = useSharedValue(0);

  useEffect(() => {
    scale.value = withSpring(1, {
      damping: 12,
      stiffness: 120,
    });

    floating.value = withRepeat(
      withSequence(
        withTiming(-8, { duration: 1800 }),
        withTiming(0, { duration: 1800 }),
      ),
      -1,
      true,
    );
  }, []);

  const circleAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: floating.value }, { scale: scale.value }],
  }));

  return { circleAnimatedStyle, AnimatedImage };
};
