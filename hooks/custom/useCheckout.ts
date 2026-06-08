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

  // Replace with your Mastercard payment id
  const MASTERCARD_ID = 1;

  // Card form remains enabled when Mastercard is selected
  const isCardFormDisabled =
    selectedPayment !== null && selectedPayment !== MASTERCARD_ID;

  const opacity = useSharedValue(1);
  const scale = useSharedValue(1);
  const translateY = useSharedValue(0);

  useEffect(() => {
    opacity.value = withTiming(isCardFormDisabled ? 0.55 : 1, {
      duration: 700,
    });

    scale.value = withTiming(isCardFormDisabled ? 0.97 : 1, {
      duration: 700,
    });

    translateY.value = withTiming(isCardFormDisabled ? 12 : 0, {
      duration: 700,
    });
  }, [isCardFormDisabled]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [
      {
        scale: scale.value,
      },
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
