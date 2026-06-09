import React, { useEffect } from "react";
import { Image, Pressable, Text } from "react-native";

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
  const scale = useSharedValue(isSelected ? 1 : 0.96);

  useEffect(() => {
    opacity.value = withTiming(isSelected ? 1 : 0.85, {
      duration: 600,
    });

    scale.value = withTiming(isSelected ? 1 : 0.96, {
      duration: 600,
    });
  }, [isSelected, opacity, scale]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [
      {
        scale: scale.value,
      },
    ],
  }));

  return (
    <Pressable onPress={onPress}>
      <Animated.View
        layout={LinearTransition.springify().damping(18).stiffness(180)}
        style={animatedStyle}
        className={`h-[88px] w-[118px] items-center justify-center rounded-[12px] border ${
          isSelected
            ? "border-[#1F1500] bg-[#F7BC5D]"
            : "border-[#EEE8C9] bg-[#FFFFE3]"
        }`}
      >
        <Image
          source={icon}
          resizeMode="contain"
          className="h-[28px] w-[40px]"
        />

        <Text
          className={`mt-[10px] font-[poppins-medium] text-[14px] ${
            isSelected ? "text-[#1F1500]" : "text-[#C2A26F]"
          }`}
        >
          {title}
        </Text>
      </Animated.View>
    </Pressable>
  );
};

export default PaymentMethodCard;
