import React from "react";
import { Image, Pressable, Text } from "react-native";

interface Props {
  title: string;
  image: any;
  onPress?: () => void;
}

const CategoryCard = ({ title, image, onPress }: Props) => {
  return (
    <Pressable
      onPress={onPress}
      className="flex-1 min-h-[150px] border border-[#F6F0D4] rounded-[10px] items-center justify-center py-[18px]"
    >
      <Text className="text-[15px] font-medium text-[#1F1500]">{title}</Text>

      <Image
        source={image}
        resizeMode="contain"
        className="w-[50px] h-[50px] mt-[12px]"
      />
    </Pressable>
  );
};

export default CategoryCard;
