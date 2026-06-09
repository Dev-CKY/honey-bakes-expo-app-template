import React, { useEffect } from "react";
import { Pressable, Text, View } from "react-native";
import Animated, {
  Extrapolation,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

type AddressCardProps = {
  item: {
    id: number;
    title: string;
    address: string;
  };
  isSelected: boolean;
  onPress: () => void;
};

const AddressCard = ({ item, isSelected, onPress }: AddressCardProps) => {
  const progress = useSharedValue(isSelected ? 1 : 0);

  useEffect(() => {
    progress.value = withTiming(isSelected ? 1 : 0, {
      duration: 250,
    });
  }, [isSelected, progress]);

  const cardStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        progress.value,
        [0, 1],
        ["#FFFFE3", "#F6F0D4"],
      ),

      borderColor: interpolateColor(
        progress.value,
        [0, 1],
        ["#F6F0D4", "#F6F0D4"],
      ),

      transform: [
        {
          scale: interpolate(
            progress.value,
            [0, 1],
            [1, 1.02],
            Extrapolation.CLAMP,
          ),
        },
      ],
    };
  });

  const dotStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value,

      transform: [
        {
          scale: interpolate(
            progress.value,
            [0, 1],
            [0.6, 1],
            Extrapolation.CLAMP,
          ),
        },
      ],
    };
  });

  const radioStyle = useAnimatedStyle(() => {
    return {
      borderColor: interpolateColor(
        progress.value,
        [0, 1],
        ["#4B3D26", "#1F1500"],
      ),
    };
  });

  return (
    <Pressable onPress={onPress}>
      <Animated.View
        style={cardStyle}
        className="flex-row items-center rounded-[14px] border p-[15px]"
      >
        {/* Radio */}
        <View className="mr-[14px]">
          <Animated.View
            style={radioStyle}
            className="h-[24px] w-[24px] items-center justify-center rounded-full border-[1.5px]"
          >
            <Animated.View
              style={dotStyle}
              className="h-[16px] w-[16px] rounded-full border-[1.5px] border-[#1F1500] bg-[#F7BC5D]"
            />
          </Animated.View>
        </View>

        {/* Content */}
        <View className="flex-1">
          <Text className="font-[poppins-medium] text-[16px] text-[#1F1500]">
            {item.title}
          </Text>

          <Text className="font-[poppins-medium] text-[14px] text-[#C2A26F]">
            {item.address}
          </Text>
        </View>
      </Animated.View>
    </Pressable>
  );
};

export default AddressCard;
