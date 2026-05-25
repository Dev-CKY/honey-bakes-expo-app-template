// Order.tsx

import { useOrderDetails } from "@/hooks/custom/useOrderDetails";
import arrowLeft from "@/src/assets/icons/svg/arrowLeft";
import HeadingTitle from "@/src/components/custom/HeadingTitle";
import IconButtonWrapper from "@/src/components/custom/IconButtonWrapper";
import OrderedItemCard from "@/src/components/custom/OrderedItemCard";
import { router } from "expo-router";
import React from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { scale } from "react-native-size-matters";

const Order = () => {
  const { orderSummary, getPaymentStatusStyle } = useOrderDetails();

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
      <HeadingTitle size={32} title="Order Details" />

      {/* Sub Heading */}
      <View className="my-[20px]">
        <HeadingTitle size={20} title="Order Summery" />
      </View>

      {/* Summary Items */}
      {orderSummary.map((item, index) => {
        const isPaymentStatus = item.label === "Payment status";

        const statusStyle = getPaymentStatusStyle(String(item.value));

        return (
          <View
            key={index}
            className="flex-row items-center justify-between py-[15px]"
          >
            {/* Label */}
            <Text className="text-[14px] text-[#C2A26F] font-[poppins-regular]">
              {item.label} :
            </Text>

            {/* Payment Status */}
            {isPaymentStatus ? (
              <View
                style={{
                  backgroundColor: statusStyle.backgroundColor,
                }}
                className="px-[15px] h-[30px] rounded-full items-center justify-center"
              >
                <Text
                  style={{
                    color: statusStyle.textColor,
                  }}
                  className="text-[14px] font-[poppins-medium] capitalize"
                >
                  {item.value}
                </Text>
              </View>
            ) : (
              <Text className="text-[14px] text-[#C2A26F] font-[poppins-medium]">
                {item.value}
              </Text>
            )}
          </View>
        );
      })}

      {/* Border */}
      <View className="border-b border-[#E9DFC0]" />

      {/* Total */}
      <View className="flex-row items-center justify-between my-[15px]">
        <Text className="text-[14px] text-[#1F1500] font-[poppins-medium]">
          Total price :
        </Text>

        <Text className="text-[14px] text-[#1F1500] font-[poppins-medium]">
          $58.37
        </Text>
      </View>

      {/* Border */}
      <View className="border-b border-[#E9DFC0]" />

      {/* Ordered Items */}
      <View className="my-[20px]">
        <HeadingTitle size={20} title="Ordered Item" />
      </View>

      {/* Item card */}
      <OrderedItemCard />

      {/* Cancel Button */}
      <Pressable className="w-full h-[60px] rounded-full items-center justify-center bg-[#F7715D] mt-[20px]">
        <Text className="font-[poppins-medium] text-[16px] text-[#fff]">
          Cancel Order
        </Text>
      </Pressable>

      {/* Track order */}
      <Pressable
        onPress={() => router.push("/screens/my-orders/order-tracking")}
        className="w-full h-[60px] rounded-full items-center justify-center border border-dashed border-[1.5px] border-[#1F1500] my-[20px]"
      >
        <Text className="font-[poppins-medium] text-[16px] text-[#1F1500]">
          Track Order
        </Text>
      </Pressable>
    </ScrollView>
  );
};

export default Order;
