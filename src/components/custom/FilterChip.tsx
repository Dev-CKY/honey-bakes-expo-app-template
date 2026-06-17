import starFilled from "@/src/assets/icons/svg/starFilled";
import starFilledBlack from "@/src/assets/icons/svg/starFilledBlack";
import React, { useEffect } from "react";
import { Pressable, View } from "react-native";
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { SvgXml } from "react-native-svg";

type FilterChipProps = {
  label: string;
  isSelected: boolean;
  onPress: () => void;
  showStar?: boolean;
};

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const FilterChip = ({
  label,
  isSelected,
  onPress,
  showStar,
}: FilterChipProps) => {
  const progress = useSharedValue(isSelected ? 1 : 0);

  useEffect(() => {
    progress.value = withTiming(isSelected ? 1 : 0, {
      duration: 500,
    });
  }, [isSelected]);

  const containerStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        progress.value,
        [0, 1],
        ["#FFFFE3", "#F7BC5D"],
      ),

      borderColor: interpolateColor(
        progress.value,
        [0, 1],
        ["#E5D6B8", "#1F1500"],
      ),

      opacity: interpolate(progress.value, [0, 1], [0.6, 1]),

      transform: [
        {
          scale: interpolate(progress.value, [0, 1], [1, 1]),
        },
      ],
    };
  });

  const textStyle = useAnimatedStyle(() => {
    return {
      color: interpolateColor(progress.value, [0, 1], ["#6B6B6B", "#1F1500"]),
    };
  });

  const starStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
      transform: [
        {
          scale: interpolate(progress.value, [0, 1], [0.6, 1]),
        },
      ],
    };
  });

  return (
    <AnimatedPressable
      onPress={onPress}
      className="px-[20px] h-[44px] rounded-full items-center justify-center border"
      style={containerStyle}
    >
      <View className="flex-row items-center gap-[4px]">
        <Animated.Text style={textStyle} className="font-[poppins-medium]">
          {label}
        </Animated.Text>

        {showStar && (
          <Animated.View style={starStyle}>
            <SvgXml xml={isSelected ? starFilledBlack : starFilled} />
          </Animated.View>
        )}
      </View>
    </AnimatedPressable>
  );
};

export default React.memo(FilterChip);
