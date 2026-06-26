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
import styles from "../../styles/components/addressCard.styles";

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
      <Animated.View style={[cardStyle, styles.containerBase]}>
        {/* Radio */}
        <View style={styles.radioWrap}>
          <Animated.View style={[radioStyle, styles.radio]}>
            <Animated.View style={[dotStyle, styles.dot]} />
          </Animated.View>
        </View>

        {/* Content */}
        <View style={styles.content}>
          <Text style={styles.title}>{item.title}</Text>

          <Text style={styles.address}>{item.address}</Text>
        </View>
      </Animated.View>
    </Pressable>
  );
};

export default AddressCard;
