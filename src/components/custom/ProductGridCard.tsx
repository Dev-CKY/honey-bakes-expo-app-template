import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { scale } from "react-native-size-matters";

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
      style={{ borderRadius: scale(12) }}
      className="flex-1 border border-[#F6F0D4] bg-[#FFFFE3] overflow-hidden"
    >
      {/* Image */}
      <View style={{ padding: scale(8) }}>
        <View
          style={{
            width: scale(125),
            height: scale(100),
          }}
        >
          <Image
            source={image}
            resizeMode="cover"
            className="w-full h-full"
            style={{ borderRadius: scale(10) }}
          />
        </View>

        {/* Add Button */}
        <Pressable
          className="absolute self-center bg-[#F7BC5D] rounded-full border border-[#1F1500]"
          style={{
            bottom: scale(-10),
            paddingHorizontal: scale(18),
            paddingVertical: scale(5),
          }}
        >
          <Text
            className=" font-[poppins-medium] text-[#1F1500]"
            style={{ fontSize: scale(12) }}
          >
            Add +
          </Text>
        </Pressable>
      </View>

      {/* Content */}
      <View
        className="items-center"
        style={{
          paddingTop: scale(18),
          paddingBottom: scale(12),
          paddingHorizontal: scale(10),
        }}
      >
        <Text
          numberOfLines={1}
          className="text-[#1F1500] font-[poppins-medium]"
          style={{ fontSize: scale(16) }}
        >
          {title}
        </Text>

        <Text
          className=" text-[#C2A26F] font-[poppins-regular]"
          style={{ fontSize: scale(12) }}
        >
          By {brand}
        </Text>

        <Text
          className="font-[poppins-medium] text-[#1F1500]"
          style={{ fontSize: scale(16), marginTop: scale(6) }}
        >
          {price}
        </Text>
      </View>
    </Pressable>
  );
};

export default ProductGridCard;
