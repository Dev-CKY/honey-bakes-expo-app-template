import { useOrderDetails } from "@/hooks/custom/useOrderDetails";
import arrowLeft from "@/src/assets/icons/svg/arrowLeft";
import CancelButton from "@/src/components/custom/CancelButton";
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
      className="flex-1 bg-[#FFFDE7]"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingBottom: scale(20),
      }}
      style={{ paddingTop: scale(20), paddingHorizontal: scale(20) }}
    >
      {/* Back Button */}
      <IconButtonWrapper icon={arrowLeft} onPress={() => router.back()} />

      {/* Heading */}
      <HeadingTitle size={32} title="Order Details" />

      {/* Sub Heading */}
      <View style={{ marginVertical: scale(20) }}>
        <HeadingTitle size={20} title="Order Summery" />
      </View>

      {/* Summary Items */}
      {orderSummary.map((item, index) => {
        const isPaymentStatus = item.label === "Payment status";

        const statusStyle = getPaymentStatusStyle(String(item.value));

        return (
          <View
            key={index}
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingVertical: scale(15),
            }}
          >
            {/* Label */}
            <Text
              style={{ fontSize: scale(14) }}
              className="text-[#C2A26F] font-[poppins-regular]"
            >
              {item.label} :
            </Text>

            {/* Payment Status */}
            {isPaymentStatus ? (
              <View
                style={{
                  backgroundColor: statusStyle.backgroundColor,
                  paddingHorizontal: scale(15),
                  height: scale(30),
                  borderRadius: scale(30) / 2,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{ color: statusStyle.textColor, fontSize: scale(14) }}
                  className="font-[poppins-medium] capitalize"
                >
                  {item.value}
                </Text>
              </View>
            ) : (
              <Text
                style={{ fontSize: scale(14) }}
                className="text-[#C2A26F] font-[poppins-medium]"
              >
                {item.value}
              </Text>
            )}
          </View>
        );
      })}

      {/* Border */}
      <View className="border-b border-[#E9DFC0]" />

      {/* Total */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginVertical: scale(15),
        }}
      >
        <Text
          style={{ fontSize: scale(14) }}
          className="text-[#1F1500] font-[poppins-medium]"
        >
          Total price :
        </Text>

        <Text
          style={{ fontSize: scale(14) }}
          className="text-[#1F1500] font-[poppins-medium]"
        >
          $58.37
        </Text>
      </View>

      {/* Border */}
      <View className="border-b border-[#E9DFC0]" />

      {/* Ordered Items */}
      <View style={{ marginVertical: scale(20) }}>
        <HeadingTitle size={20} title="Ordered Item" />
      </View>

      {/* Item card */}
      <OrderedItemCard />

      {/* Cancel Button */}
      <View style={{ marginTop: scale(20) }}>
        <CancelButton />
      </View>

      {/* Track order */}
      <Pressable
        onPress={() => router.push("/screens/my-orders/order-tracking")}
        className="w-full border border-dashed border-[#1F1500]"
        style={{
          height: scale(60),
          borderWidth: scale(1.5),
          borderRadius: scale(60) / 2,
          alignItems: "center",
          justifyContent: "center",
          marginVertical: scale(20),
        }}
      >
        <Text
          style={{ fontSize: scale(16) }}
          className="font-[poppins-medium] text-[#1F1500]"
        >
          Track Order
        </Text>
      </Pressable>
    </ScrollView>
  );
};

export default Order;
