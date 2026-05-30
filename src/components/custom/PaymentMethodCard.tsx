import React from "react";
import { Image, Pressable, Text } from "react-native";

// Reanimated
import Animated, { FadeIn, FadeOut, Layout } from "react-native-reanimated";

type Props = {
  title: string;
  icon: any;
  isSelected: boolean;
  onPress: () => void;
};

const PaymentMethodCard = ({ title, icon, isSelected, onPress }: Props) => {
  return (
    <Pressable onPress={onPress}>
      <Animated.View
        layout={Layout.springify().damping(18).stiffness(180)}
        key={isSelected ? "selected" : "unselected"}
        entering={FadeIn.duration(250)}
        exiting={FadeOut.duration(200)}
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
