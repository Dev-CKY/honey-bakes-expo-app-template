import React from "react";
import { Image, Pressable, Text, View } from "react-native";

interface Props {
  title: string;
  image: any;
  price: string;
  brand: string;
  onPress?: () => void;
}

const ProductGridCard = ({ title, image, price, brand, onPress }: Props) => {
  return (
    <Pressable
      onPress={onPress}
      className="flex-1 border border-[#F6F0D4] rounded-[12px] bg-[#FFFFE3] overflow-hidden"
    >
      {/* Image */}
      <View className="p-[8px]">
        <Image
          source={image}
          resizeMode="cover"
          className="w-full h-[120px] rounded-[10px]"
        />

        {/* Add Button */}
        <Pressable className="absolute bottom-[-10px] self-center bg-[#F7BC5D] px-[18px] py-[5px] rounded-full border border-[#1F1500]">
          <Text className="text-[12px] font-[poppins-medium] text-[#1F1500]">
            Add +
          </Text>
        </Pressable>
      </View>

      {/* Content */}
      <View className="pt-[18px] pb-[12px] px-[10px] items-center">
        <Text
          numberOfLines={1}
          className="text-[16px] text-[#1F1500] font-[poppins-medium]"
        >
          {title}
        </Text>

        <Text className="text-[12px] text-[#C2A26F] font-[poppins-regular]">
          By {brand}
        </Text>

        <Text className="text-[16px] font-[poppins-medium] text-[#1F1500] mt-[6px]">
          {price}
        </Text>
      </View>
    </Pressable>
  );
};

export default ProductGridCard;
