import arrowLeft from "@/src/assets/icons/svg/arrowLeft";
import bin2 from "@/src/assets/icons/svg/bin2";
import cross from "@/src/assets/icons/svg/cross";
import Button from "@/src/components/custom/Button";
import HeadingTitle from "@/src/components/custom/HeadingTitle";
import IconButtonWrapper from "@/src/components/custom/IconButtonWrapper";
import WISHLIST_ITEMS from "@/src/data/wishlist-items.data";
import { router } from "expo-router";
import React, { useState } from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { scale } from "react-native-size-matters";
import { SvgXml } from "react-native-svg";

const Wishlist = () => {
  const [wishlistItems] = useState(WISHLIST_ITEMS);

  return (
    <ScrollView
      className="flex-1 bg-[#FFFFE3] py-[20px]"
      showsVerticalScrollIndicator={false}
      bounces={false}
      contentContainerStyle={{
        paddingBottom: scale(120),
      }}
    >
      <View className="flex-row items-center justify-between px-[20px]">
        {/* Back button */}
        <IconButtonWrapper icon={arrowLeft} onPress={() => router.back()} />

        {/* Delete Button */}
        <IconButtonWrapper icon={bin2} onPress={() => {}} />
      </View>

      {/* Heading */}
      <View className="px-[20px]">
        <HeadingTitle title="My Wishlist" />
      </View>

      {/* Wishlist Items List */}
      {wishlistItems.map((item) => (
        <View
          key={item.id}
          className="flex-row items-start justify-between mt-[20px] border-b border-b-[1px] border-[#F6F0D4] pb-[20px]"
        >
          {/* Item Details */}
          <View className="flex-row items-center pl-[20px]">
            {/* Card Image */}
            <Image source={item.image} className="w-[90px] h-[90px]" />

            {/* Card content */}
            <View className="ml-[10px]">
              {/* Item Name and Close Icon */}
              <View className="flex-row items-center justify-between w-[250px]">
                {/* Item Name */}
                <Text className="text-[16px] font-[poppins-medium] text-[#1F1500]">
                  {item.name}
                </Text>

                {/* Close icon */}
                <Pressable className="pr-[20px]" onPress={() => {}}>
                  <SvgXml xml={cross} className="w-[24px] h-[24px]" />
                </Pressable>
              </View>

              {/* Seller Name */}
              <Text className="text-[14px] font-[poppins-regular] text-[#C2A26F]">
                {item.seller}
              </Text>

              {/* Price */}
              <Text className="text-[16px] font-[poppins-medium] text-[#1F1500] mt-[10px]">
                {item.price}
              </Text>
            </View>
          </View>
        </View>
      ))}

      {/* Move to Cart Button */}
      <View className="px-[20px] mt-[20px]">
        <Button label="Move to Cart" onPress={() => {}} />
      </View>
    </ScrollView>
  );
};

export default Wishlist;
