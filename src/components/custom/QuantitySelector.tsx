import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { scheduleOnRN } from "react-native-worklets";

type Props = {
  value: number;
};

const DIGIT_HEIGHT = 24;

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
    <View
      style={{
        height: DIGIT_HEIGHT,
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Animated.View style={animatedStyle}>
        <Text
          style={{
            fontSize: 18,
            fontFamily: "poppins-medium",
            color: "#1F1500",
          }}
        >
          {displayValue}
        </Text>
      </Animated.View>
    </View>
  );
}
