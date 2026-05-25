import React from "react";
import { Image, Text, View } from "react-native";
import StarRating from "react-native-star-rating-widget";

const OrderedItemCard = () => {
  return (
    <View className="flex-row items-center border rounded-[10px] border-[#F6F0D4] border-[1px] p-[5px]">
      {/* Item image */}
      <Image
        source={require("@/src/assets/images/custom/products/cake.jpg")}
        className="w-[120px] h-[100px] rounded-[7px]"
        resizeMode="cover"
      />

      {/* Item details wrapper */}
      <View className="ml-[10px] flex-1 justify-between">
        {/* Item name */}
        <Text className="text-[16px] text-[#1F1500] font-[poppins-medium]">
          Vanilla Choco Cake
        </Text>

        {/* Seller */}
        <Text className="text-[14px] text-[#C2A26F] font-[poppins-regular] ">
          HoneyBakes
        </Text>

        {/* Rating */}
        <View className="flex-row items-center mt-[4px]">
          <StarRating
            rating={4}
            onChange={() => {}}
            starSize={18}
            color="#FFC700"
            emptyColor="#D9D9D9"
            starStyle={{ marginHorizontal: 1 }}
          />

          <Text className="ml-[5px] text-[14px] text-[#1F1500] font-[poppins-medium]">
            4.0
          </Text>

          <Text className="ml-[2px] text-[14px] text-[#C2A26F] font-[poppins-regular]">
            (1,656)
          </Text>
        </View>

        {/* Price */}
        <Text className="mt-[10px] text-[14px] text-[#1F1500] font-[poppins-medium]">
          $54.05
        </Text>
      </View>
    </View>
  );
};

export default OrderedItemCard;
