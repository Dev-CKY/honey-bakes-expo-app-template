import { ADDRESS_DATA } from "@/src/data/address.data";
import { useEffect, useState } from "react";
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

export const useCheckout = () => {
  const [selectedAddress, setSelectedAddress] = useState<number>(
    ADDRESS_DATA[0].id,
  );

  const [selectedPayment, setSelectedPayment] = useState<number | null>(null);

  const [rememberCard, setRememberCard] = useState(true);

  const isCardFormDisabled = selectedPayment !== null;

  const opacity = useSharedValue(1);

  const translateY = useSharedValue(0);

  useEffect(() => {
    opacity.value = withTiming(isCardFormDisabled ? 0.4 : 1, {
      duration: 300,
    });

    translateY.value = withTiming(isCardFormDisabled ? 10 : 0, {
      duration: 300,
    });
  }, [isCardFormDisabled]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [
      {
        translateY: translateY.value,
      },
    ],
  }));

  return {
    selectedAddress,
    setSelectedAddress,
    selectedPayment,
    setSelectedPayment,
    rememberCard,
    setRememberCard,
    isCardFormDisabled,
    animatedStyle,
    translateY,
  };
};
