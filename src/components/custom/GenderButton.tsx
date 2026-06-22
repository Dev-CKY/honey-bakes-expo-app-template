import React, { useEffect } from "react";
import { Pressable, Text } from "react-native";
import Animated, {
  Easing,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { scale } from "react-native-size-matters";

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
        ["#E8DDB6", "#1F1500"],
      ),
    };
  });

  return (
    <AnimatedPressable
      onPress={onPress}
      style={[
        animatedStyle,
        {
          flex: 1,
          height: scale(50),
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          borderWidth: scale(1.5),
          borderRadius: scale(50) / 2,
          paddingHorizontal: scale(12),
        },
      ]}
    >
      <Text
        style={{ marginRight: scale(8), fontSize: scale(22) }}
        className="text-[#1F1500]"
      >
        {symbol}
      </Text>

      <Text
        style={{ fontSize: scale(17) }}
        className="font-[poppins-medium] text-[#1F1500]"
      >
        {title}
      </Text>
    </AnimatedPressable>
  );
};

export default React.memo(GenderButton);
