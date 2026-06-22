import React, { useEffect } from "react";
import { Image, Pressable, Text } from "react-native";
import { scale } from "react-native-size-matters";

import Animated, {
  LinearTransition,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

type Props = {
  title: string;
  icon: any;
  isSelected: boolean;
  onPress: () => void;
};

const PaymentMethodCard = ({ title, icon, isSelected, onPress }: Props) => {
  const opacity = useSharedValue(isSelected ? 1 : 0.85);
  const scaleVal = useSharedValue(isSelected ? 1 : 0.96);

  useEffect(() => {
    opacity.value = withTiming(isSelected ? 1 : 0.85, {
      duration: 600,
    });

    scaleVal.value = withTiming(isSelected ? 1 : 0.96, {
      duration: 600,
    });
  }, [isSelected, opacity, scale]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [
      {
        scale: scaleVal.value,
      },
    ],
  }));

  return (
    <Pressable onPress={onPress}>
      <Animated.View
        layout={LinearTransition.springify().damping(18).stiffness(180)}
        style={[
          animatedStyle,
          {
            height: scale(88),
            width: scale(118),
            alignItems: "center",
            justifyContent: "center",
            borderWidth: scale(1),
            borderRadius: scale(12),
            backgroundColor: isSelected ? "#F7BC5D" : "#FFFFE3",
            borderColor: isSelected ? "#1F1500" : "#EEE8C9",
          },
        ]}
      >
        <Image
          source={icon}
          resizeMode="contain"
          style={{ height: scale(28), width: scale(40) }}
        />

        <Text
          style={{
            marginTop: scale(10),
            fontSize: scale(14),
            color: isSelected ? "#1F1500" : "#C2A26F",
          }}
          className="font-[poppins-medium]"
        >
          {title}
        </Text>
      </Animated.View>
    </Pressable>
  );
};

export default PaymentMethodCard;
