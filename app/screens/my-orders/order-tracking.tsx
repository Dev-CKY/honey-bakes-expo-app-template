// OrderTracking.tsx

import arrowLeft from "@/src/assets/icons/svg/arrowLeft";
import CancelButton from "@/src/components/custom/CancelButton";
import HeadingTitle from "@/src/components/custom/HeadingTitle";
import IconButtonWrapper from "@/src/components/custom/IconButtonWrapper";
import OrderedItemCard from "@/src/components/custom/OrderedItemCard";
import { router } from "expo-router";
import React from "react";
import { ScrollView, Text, View } from "react-native";
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
    status: "completed",
  },
  {
    title: "Order started preparing",
    time: "12:40 pm 27th April 2026",
    status: "current",
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

          // Last item check
          const isLastItem = index === trackingSteps.length - 1;

          return (
            <View key={index} className="flex-row">
              {/* Left Side */}
              <View className="items-center mr-[15px]">
                {/* Circle */}
                <View
                  className={`
                    w-[24px]
                    h-[24px]
                    rounded-full
                    border-[2px]
                    border-[#1F1500]
                    items-center
                    justify-center
                  `}
                >
                  {/* Inner Dot */}
                  {(isCompleted || isCurrent) && (
                    <View
                      className={`
                        w-[14px]
                        h-[14px]
                        rounded-full
                        ${
                          isCompleted || isCurrent
                            ? "bg-[#F7BC5D]"
                            : "bg-transparent"
                        }
                      `}
                    />
                  )}
                </View>

                {/* Line */}
                {!isLastItem && (
                  <View
                    className={`
                      h-[70px]
                      border-l-[2px]
                      border-dashed
                      ${
                        isCompleted || isCurrent
                          ? "border-[#F7BC5D]"
                          : "border-[#1F1500]"
                      }
                    `}
                  />
                )}
              </View>

              {/* Right Side */}
              <View className="flex-1 pb-[25px]">
                {/* Title */}
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
