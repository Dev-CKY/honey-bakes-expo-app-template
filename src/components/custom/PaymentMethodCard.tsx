import React, { useEffect } from "react";
import { Image, Pressable, Text } from "react-native";
import Animated, {
  LinearTransition,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import styles from "../../styles/components/paymentMethodCard.styles";

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
          styles.containerBase,
          isSelected ? styles.containerSelected : styles.containerDefault,
        ]}
      >
        <Image source={icon} resizeMode="contain" style={styles.image} />

        <Text style={isSelected ? styles.titleSelected : styles.titleDefault}>
          {title}
        </Text>
      </Animated.View>
    </Pressable>
  );
};

export default PaymentMethodCard;
