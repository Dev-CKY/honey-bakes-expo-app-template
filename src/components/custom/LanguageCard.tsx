import React, { useEffect, useRef } from "react";
import { Animated, Image, Pressable, Text } from "react-native";
import { scale } from "react-native-size-matters";

interface Props {
  language: string;
  image: any;
  onPress?: () => void;
  selected?: boolean;
}

const LanguageCard = ({ language, image, onPress, selected }: Props) => {
  const anim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(anim, {
      toValue: selected ? 1 : 0,
      duration: 350,
      useNativeDriver: false,
    }).start();
  }, [selected]);

  const bgColor = anim.interpolate({
    inputRange: [0, 1],
    outputRange: ["#FFFFE3", "#F6F0D4"],
  });

  const borderColor = anim.interpolate({
    inputRange: [0, 1],
    outputRange: ["#F6F0D4", "#1F1500"],
  });

  const opacity = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [0.7, 1],
  });

  return (
    <Pressable onPress={onPress} style={{ flex: 1 }}>
      <Animated.View
        style={{
          backgroundColor: bgColor,
          borderColor: borderColor,
          opacity,
          minHeight: scale(150),
          borderWidth: scale(1),
          borderRadius: scale(10),
          alignItems: "center",
          justifyContent: "center",
          paddingVertical: scale(18),
        }}
      >
        <Text
          style={{ fontSize: scale(15) }}
          className="font-[poppins-medium] text-[#1F1500]"
        >
          {language}
        </Text>

        <Image
          source={image}
          resizeMode="contain"
          style={{ width: scale(50), height: scale(50), marginTop: scale(12) }}
        />
      </Animated.View>
    </Pressable>
  );
};

export default LanguageCard;
