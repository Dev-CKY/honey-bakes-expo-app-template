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
import { scale } from "react-native-size-matters";

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
        style={[
          cardStyle,
          {
            flexDirection: "row",
            alignItems: "center",
            borderWidth: scale(1),
            borderRadius: scale(14),
            padding: scale(15),
          },
        ]}
      >
        {/* Radio */}
        <View style={{ marginRight: scale(14) }}>
          <Animated.View
            style={[
              radioStyle,
              {
                height: scale(24),
                width: scale(24),
                alignItems: "center",
                justifyContent: "center",
                borderRadius: scale(24) / 2,
                borderWidth: scale(1.5),
              },
            ]}
          >
            <Animated.View
              style={[
                dotStyle,
                {
                  height: scale(16),
                  width: scale(16),
                  borderRadius: scale(16) / 2,
                  borderWidth: scale(1.5),
                  borderColor: "#1F1500",
                  backgroundColor: "#F7BC5D",
                },
              ]}
            />
          </Animated.View>
        </View>

        {/* Content */}
        <View style={{ flex: 1 }}>
          <Text
            style={{ fontSize: scale(16) }}
            className="font-[poppins-medium] text-[#1F1500]"
          >
            {item.title}
          </Text>

          <Text
            style={{ fontSize: scale(14) }}
            className="font-[poppins-medium] text-[#C2A26F]"
          >
            {item.address}
          </Text>
        </View>
      </Animated.View>
    </Pressable>
  );
};

export default AddressCard;
