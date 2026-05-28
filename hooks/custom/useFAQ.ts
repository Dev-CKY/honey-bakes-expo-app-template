import { useState } from "react";
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

export const useFAQ = () => {
  const [expanded, setExpanded] = useState(false);

  const rotate = useSharedValue(0);

  const handleToggle = () => {
    rotate.value = withTiming(expanded ? 0 : 45, {
      duration: 200,
    });

    setExpanded(!expanded);
  };

  const animatedIconStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: `${rotate.value}deg`,
        },
      ],
    };
  });

  return {
    handleToggle,
    animatedIconStyle,
    expanded,
  };
};
