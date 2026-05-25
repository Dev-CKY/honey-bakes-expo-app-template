import arrowLeft from "@/src/assets/icons/svg/arrowLeft";
import HeadingTitle from "@/src/components/custom/HeadingTitle";
import IconButtonWrapper from "@/src/components/custom/IconButtonWrapper";
import { router } from "expo-router";
import React from "react";
import { ScrollView } from "react-native";
import { scale } from "react-native-size-matters";

const OrderTracking = () => {
  return (
    <ScrollView
      className="flex-1 bg-[#FFFDE7] pt-[20px] px-[20px]"
      showsVerticalScrollIndicator={false}
      bounces={false}
      contentContainerStyle={{
        paddingBottom: scale(20),
      }}
    >
      {/* Back Button */}
      <IconButtonWrapper icon={arrowLeft} onPress={() => router.back()} />

      {/* Heading */}
      <HeadingTitle size={32} title="Order Tracking" />
    </ScrollView>
  );
};

export default OrderTracking;
