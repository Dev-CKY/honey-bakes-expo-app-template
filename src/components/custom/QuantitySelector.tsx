import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { scheduleOnRN } from "react-native-worklets";
import styles, {
  DIGIT_HEIGHT,
} from "../../styles/components/quantitySelector.styles";

type Props = {
  value: number;
};

export default function AnimatedQuantity({ value }: Props) {
  const [displayValue, setDisplayValue] = useState(value);

  const translateY = useSharedValue(0);
  const opacity = useSharedValue(1);

  useEffect(() => {
    if (value === displayValue) return;

    const increasing = value > displayValue;

    translateY.value = 0;
    opacity.value = 1;

    translateY.value = withTiming(
      increasing ? -DIGIT_HEIGHT : DIGIT_HEIGHT,
      {
        duration: 180,
        easing: Easing.out(Easing.cubic),
      },
      () => {
        scheduleOnRN(setDisplayValue, value);

        translateY.value = increasing ? DIGIT_HEIGHT : -DIGIT_HEIGHT;

        opacity.value = 0;

        translateY.value = withTiming(0, {
          duration: 220,
          easing: Easing.out(Easing.cubic),
        });

        opacity.value = withTiming(1, {
          duration: 220,
        });
      },
    );
  }, [value]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
    opacity: opacity.value,
  }));

  return (
    <View style={styles.container}>
      <Animated.View style={animatedStyle}>
        <Text style={styles.valueText}>{displayValue}</Text>
      </Animated.View>
    </View>
  );
}
