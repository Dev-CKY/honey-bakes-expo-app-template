import { useOrderPlaced } from "@/hooks/custom/useOrderPlaced";
import arrowLeft from "@/src/assets/icons/svg/arrowLeft";
import IconButtonWrapper from "@/src/components/custom/IconButtonWrapper";
import { router } from "expo-router";
import React from "react";
import { ImageBackground, View } from "react-native";
import { scale } from "react-native-size-matters";

import Animated, {
  FadeIn,
  FadeInDown,
  FadeInUp,
} from "react-native-reanimated";

const OrderPlaced = () => {
  const { circleAnimatedStyle, AnimatedImage } = useOrderPlaced();

  return (
    <View
      className="flex-1 bg-[#FFFFE3]"
      style={{ backgroundColor: "#FFFFE3" }}
    >
      {/* Top Banner */}
      <Animated.View entering={FadeIn.duration(600)}>
        <ImageBackground
          source={require("@/src/assets/images/custom/flags.png")}
          resizeMode="cover"
          className="w-full h-[300px]"
          style={{ height: scale(300) }}
        >
          <View className=" p-[20px]" style={{ padding: scale(20) }}>
            <IconButtonWrapper icon={arrowLeft} onPress={() => router.back()} />
          </View>
        </ImageBackground>
      </Animated.View>

      {/* Success Section */}
      <View
        className="mt-[40px] items-center"
        style={{ marginTop: scale(40), alignItems: "center" }}
      >
        <Animated.View
          entering={FadeInUp.delay(250).duration(700)}
          style={circleAnimatedStyle}
          className="h-[100px] w-[100px] items-center justify-center rounded-full bg-[#DBFFC9]"
          style={{
            height: scale(100),
            width: scale(100),
            borderRadius: scale(50),
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#DBFFC9",
          }}
        >
          <AnimatedImage
            entering={FadeIn.delay(500).duration(500)}
            source={require("@/src/assets/images/custom/icons/truck_tick.png")}
            resizeMode="contain"
            className="h-[50px] w-[50px]"
            style={{ height: scale(50), width: scale(50) }}
          />
        </Animated.View>

        <Animated.Text
          entering={FadeInDown.delay(500).duration(600)}
          className="mt-[10px] text-[20px] text-[#1F1500] font-[poppins-medium]"
          style={{ marginTop: scale(10), fontSize: scale(20) }}
        >
          Hurray! order placed!
        </Animated.Text>

        <Animated.Text
          entering={FadeInDown.delay(700).duration(600)}
          className="mt-[5px] text-center text-[14px] leading-[22px] text-[#C2A26F] font-[poppins-regular]"
          style={{
            marginTop: scale(5),
            fontSize: scale(14),
            lineHeight: scale(22),
            textAlign: "center",
          }}
        >
          Congratulations! order{"\n"}
          placed successfully
        </Animated.Text>
      </View>
    </View>
  );
};

export default OrderPlaced;
