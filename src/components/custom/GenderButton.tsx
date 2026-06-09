import React, { useEffect } from "react";
import { Pressable, Text } from "react-native";
import Animated, {
  Easing,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

type GenderButtonProps = {
  title: string;
  symbol: string;
  selected: boolean;
  onPress: () => void;
};

const GenderButton = ({
  title,
  symbol,
  selected,
  onPress,
}: GenderButtonProps) => {
  const progress = useSharedValue(selected ? 1 : 0);

  useEffect(() => {
    progress.value = withTiming(selected ? 1 : 0, {
      duration: 550,
      easing: Easing.out(Easing.cubic),
    });
  }, [selected, progress]);

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

  return (
    <AnimatedPressable
      onPress={onPress}
      style={animatedStyle}
      className="flex-1 h-[50px] flex-row items-center justify-center rounded-full border-[1.5px]"
    >
      <Text className="mr-2 text-[22px] text-[#1F1500]">{symbol}</Text>

      <Text className="font-[poppins-medium] text-[17px] text-[#1F1500]">
        {title}
      </Text>
    </AnimatedPressable>
  );
};

export default React.memo(GenderButton);
