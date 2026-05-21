import arrowLeft from "@/src/assets/icons/svg/arrowLeft";
import bin2 from "@/src/assets/icons/svg/bin2";
import BackButton from "@/src/components/custom/BackButton";
import HeadingTitle from "@/src/components/custom/HeadingTitle";
import { router } from "expo-router";
import React from "react";
import { ScrollView, View } from "react-native";
import { scale } from "react-native-size-matters";

const Cart = () => {
  return (
    <ScrollView
      className="flex-1 bg-[#FFFFE3] py-[20px]"
      showsVerticalScrollIndicator={false}
      bounces={false}
      contentContainerStyle={{
        paddingBottom: scale(120),
      }}
    >
      <View className="px-[20px]">
        <View className="flex-row items-center justify-between">
          {/* Back button */}
          <BackButton icon={arrowLeft} onPress={() => router.back()} />

          {/* Delete Button */}
          <BackButton icon={bin2} onPress={() => console.log("Delete item")} />
        </View>

        {/* Heading */}
        <HeadingTitle title="My Cart" />
      </View>
    </ScrollView>
  );
};

export default Cart;
