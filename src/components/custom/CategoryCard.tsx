import React from "react";
import { Image, Pressable, Text } from "react-native";
import { scale } from "react-native-size-matters";

interface Props {
  title: string;
  image: any;
  onPress?: () => void;
}

const CategoryCard = ({ title, image, onPress }: Props) => {
  return (
    <Pressable
      onPress={onPress}
      style={{
        minHeight: scale(150),
        borderRadius: scale(10),
        paddingVertical: scale(18),
      }}
      className="flex-1 border border-[#F6F0D4] items-center justify-center"
    >
      <Text
        className="font-[poppins-medium] text-[#1F1500]"
        style={{
          fontSize: scale(15),
        }}
      >
        {title}
      </Text>

      <Image
        source={image}
        resizeMode="contain"
        style={{
          width: scale(50),
          height: scale(50),
          marginTop: scale(12),
        }}
      />
    </Pressable>
  );
};

export default CategoryCard;
