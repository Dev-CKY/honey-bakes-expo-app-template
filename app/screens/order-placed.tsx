import arrowLeft from "@/src/assets/icons/svg/arrowLeft";
import bin2 from "@/src/assets/icons/svg/bin2";
import IconButtonWrapper from "@/src/components/custom/IconButtonWrapper";
import { router } from "expo-router";
import React from "react";
import { Image, ImageBackground, Text, View } from "react-native";

const OrderPlaced = () => {
  return (
    <View className="flex-1 bg-[#FFFFE3]">
      {/* Top Banner */}
      <ImageBackground
        source={require("@/src/assets/images/custom/flags.png")}
        resizeMode="cover"
        className="w-full h-[300px]"
      >
        <View className="flex-row items-center justify-between p-[20px]">
          <IconButtonWrapper icon={arrowLeft} onPress={() => router.back()} />

          <IconButtonWrapper icon={bin2} onPress={() => {}} />
        </View>
      </ImageBackground>

      {/* Success Circle - overlaps banner */}
      <View className="mt-[40px] items-center">
        <View className="h-[100px] w-[100px] items-center justify-center rounded-full bg-[#DBFFC9]">
          <Image
            source={require("@/src/assets/images/custom/icons/truck_tick.png")}
            resizeMode="contain"
            className="h-[50px] w-[50px]"
          />
        </View>

        <Text className="mt-[10px] text-[20px] text-[#1F1500] font-[poppins-medium]">
          Hurray! order placed!
        </Text>

        <Text className="mt-[5px] text-center text-[14px] leading-[22px] text-[#C2A26F] font-[poppins-regular]">
          Congratulations! order{"\n"}
          placed successfully
        </Text>
      </View>
    </View>
  );
};

export default OrderPlaced;
