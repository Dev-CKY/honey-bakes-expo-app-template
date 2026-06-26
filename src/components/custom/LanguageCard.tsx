import React, { useEffect, useRef } from "react";
import { Animated, Image, Pressable, Text } from "react-native";
import styles from "../../styles/components/languageCard.styles";

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
        style={[
          { backgroundColor: bgColor, borderColor, opacity },
          styles.container,
        ]}
      >
        <Text style={styles.title}>{language}</Text>

        <Image source={image} resizeMode="contain" style={styles.image} />
      </Animated.View>
    </Pressable>
  );
};

export default LanguageCard;
