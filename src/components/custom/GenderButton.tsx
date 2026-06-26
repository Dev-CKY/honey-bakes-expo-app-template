import React, { useEffect } from "react";
import { Pressable, Text } from "react-native";
import Animated, {
  Easing,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import styles from "../../styles/components/genderButton.styles";

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
    <AnimatedPressable onPress={onPress} style={[animatedStyle, styles.base]}>
      <Text style={styles.symbol}>{symbol}</Text>

      <Text style={styles.title}>{title}</Text>
    </AnimatedPressable>
  );
};

export default React.memo(GenderButton);
