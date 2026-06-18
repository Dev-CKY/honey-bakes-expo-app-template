// OrderTracking.tsx

import { useLineProgressAnimation } from "@/hooks/custom/useLineProgressAnimation";
import { usePulseAnimation } from "@/hooks/custom/usePulseAnimation";
import arrowLeft from "@/src/assets/icons/svg/arrowLeft";
import CancelButton from "@/src/components/custom/CancelButton";
import HeadingTitle from "@/src/components/custom/HeadingTitle";
import IconButtonWrapper from "@/src/components/custom/IconButtonWrapper";
import OrderedItemCard from "@/src/components/custom/OrderedItemCard";
import { router } from "expo-router";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import Animated from "react-native-reanimated";
import { scale } from "react-native-size-matters";

// Tracking data
const trackingSteps = [
  {
    title: "Order placed",
    time: "12:30 pm 27th April 2026",
    status: "completed",
  },
  {
    title: "Order Confirmed",
    time: "12:35 pm 27th April 2026",
    status: "current",
  },
  {
    title: "Order started preparing",
    time: "12:40 pm 27th April 2026",
    status: "pending",
  },
  {
    title: "Order Prepared",
    time: "4:10 pm 27th April 2026",
    status: "pending",
  },
  {
    title: "Out for delivery",
    time: "4:30 pm 27th April 2026",
    status: "pending",
  },
];

const OrderTracking = () => {
  // Find the index of the current active step
  const currentStepIndex = trackingSteps.findIndex(
    (step) => step.status === "current",
  );

  // Use custom hooks for animations
  const pulseStyle = usePulseAnimation({
    duration: 2000,
    scaleRange: [0.8, 1.2],
    opacityRange: [0.3, 1],
  });

  const lineAnimatedStyle = useLineProgressAnimation({
    duration: 3000,
  });

  return (
    <ScrollView
      className="flex-1 bg-[#FFFDE7] px-[20px] pt-[20px]"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingBottom: scale(40),
      }}
    >
      {/* Back Button */}
      <IconButtonWrapper icon={arrowLeft} onPress={() => router.back()} />

      {/* Heading */}
      <HeadingTitle size={32} title="Order Tracking" />

      {/* Ordered Item */}
      <View className="my-[20px]">
        <HeadingTitle size={20} title="Ordered Item" />
      </View>

      <OrderedItemCard />

      {/* Timeline */}
      <View className="mt-[20px]">
        {trackingSteps.map((item, index) => {
          // Check status
          const isCompleted = item.status === "completed";
          const isCurrent = item.status === "current";
          const isLastItem = index === trackingSteps.length - 1;
          const isActive = index <= currentStepIndex;
          const isLastCompleted = isCompleted && index === currentStepIndex - 1;

          return (
            <View key={index} className="flex-row">
              {/* Left Side */}
              <View className="items-center mr-[15px]">
                {/* Circle with animation for current step */}
                {isCurrent ? (
                  <Animated.View className="w-[24px] h-[24px] rounded-full border-2 border-[#F7BC5D] items-center justify-center">
                    <Animated.View
                      className="w-[14px] h-[14px] rounded-full bg-[#F7BC5D]"
                      style={pulseStyle}
                    />
                  </Animated.View>
                ) : (
                  <View
                    className={`
                      w-[24px] h-[24px] rounded-full border-2 border-[#1F1500] 
                      items-center justify-center
                    `}
                  >
                    {/* Inner Dot */}
                    {(isCompleted || isCurrent) && (
                      <View
                        className={`
                          w-[14px] h-[14px] rounded-full
                          ${isCompleted || isCurrent ? "bg-[#F7BC5D]" : "bg-transparent"}
                        `}
                      />
                    )}
                  </View>
                )}

                {/* Animated Line with gradient fill */}
                {!isLastItem && (
                  <View className="relative h-[70px] w-[2px] overflow-hidden">
                    {/* Base line (grey/dashed) */}
                    <View
                      className={`
                        absolute w-full h-full border-l-2 border-dashed
                        ${isActive ? "border-[#ffdca3]" : "border-[#1F1500]"}
                      `}
                    />

                    {/* Animated progress fill - only for the last completed step */}
                    {isLastCompleted && (
                      <Animated.View
                        className="absolute top-0 w-full bg-[#F7BC5D]"
                        style={lineAnimatedStyle}
                      />
                    )}

                    {/* Fully filled lines for other completed steps (not the last one) */}
                    {isCompleted && !isLastCompleted && (
                      <View className="absolute top-0 w-full h-full bg-[#F7BC5D]" />
                    )}
                  </View>
                )}
              </View>

              {/* Right Side - No animation on text */}
              <View className="flex-1 pb-[25px]">
                {/* Title - static text */}
                <Text className="text-[18px] text-[#1F1500] font-[poppins-medium]">
                  {item.title}
                </Text>

                {/* Time */}
                <Text className="text-[12px] text-[#C2A26F] mt-[2px] font-[poppins-regular]">
                  {item.time}
                </Text>
              </View>
            </View>
          );
        })}
      </View>

      {/* Cancel Button */}
      <CancelButton />
    </ScrollView>
  );
};

export default OrderTracking;
