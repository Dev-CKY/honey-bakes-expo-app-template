import arrowLeft from "@/src/assets/icons/svg/arrowLeft";
import bin2 from "@/src/assets/icons/svg/bin2";
import BackButton from "@/src/components/custom/BackButton";
import Button from "@/src/components/custom/Button";
import HeadingTitle from "@/src/components/custom/HeadingTitle";
import { router } from "expo-router";
import React from "react";
import { ScrollView, View } from "react-native";
import { scale } from "react-native-size-matters";

const Wishlist = () => {
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
        <BackButton icon={arrowLeft} onPress={() => router.back()} />

        {/* Delete Button */}
        <BackButton icon={bin2} onPress={() => {}} />
      </View>

      {/* Heading */}
      <View className="px-[20px]">
        <HeadingTitle title="My Wishlist" />
      </View>

      {/* Move to Cart Button */}
      <View className="px-[20px] mt-[20px]">
        <Button label="Move to Cart" onPress={() => {}} />
      </View>
    </ScrollView>
  );
};

export default Wishlist;
