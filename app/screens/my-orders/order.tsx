import { useOrderDetails } from "@/hooks/custom/useOrderDetails";
import arrowLeft from "@/src/assets/icons/svg/arrowLeft";
import CancelButton from "@/src/components/custom/CancelButton";
import HeadingTitle from "@/src/components/custom/HeadingTitle";
import IconButtonWrapper from "@/src/components/custom/IconButtonWrapper";
import OrderedItemCard from "@/src/components/custom/OrderedItemCard";
import styles from "@/src/styles/screens/orderDetails.styles";
import { router } from "expo-router";
import React from "react";
import { Pressable, ScrollView, Text, View } from "react-native";

const Order = () => {
  const { orderSummary, getPaymentStatusStyle } = useOrderDetails();

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.contentContainer}
    >
      {/* Back Button */}
      <IconButtonWrapper icon={arrowLeft} onPress={() => router.back()} />

      {/* Heading */}
      <HeadingTitle size={32} title="Order Details" />

      {/* Sub Heading */}
      <View style={styles.sectionHeading}>
        <HeadingTitle size={20} title="Order Summery" />
      </View>

      {/* Summary Items */}
      {orderSummary.map((item, index) => {
        const isPaymentStatus = item.label === "Payment status";
        const statusStyle = getPaymentStatusStyle(String(item.value));

        return (
          <View key={index} style={styles.summaryRow}>
            {/* Label */}
            <Text style={styles.label}>{item.label} :</Text>

            {/* Payment Status */}
            {isPaymentStatus ? (
              <View
                style={[
                  styles.paymentStatusContainer,
                  {
                    backgroundColor: statusStyle.backgroundColor,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.paymentStatusText,
                    {
                      color: statusStyle.textColor,
                    },
                  ]}
                >
                  {item.value}
                </Text>
              </View>
            ) : (
              <Text style={styles.value}>{item.value}</Text>
            )}
          </View>
        );
      })}

      {/* Border */}
      <View style={styles.divider} />

      {/* Total */}
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total price :</Text>

        <Text style={styles.totalText}>$58.37</Text>
      </View>

      {/* Border */}
      <View style={styles.divider} />

      {/* Ordered Items */}
      <View style={styles.sectionHeading}>
        <HeadingTitle size={20} title="Ordered Item" />
      </View>

      {/* Item card */}
      <OrderedItemCard />

      {/* Cancel Button */}
      <View style={styles.cancelButtonContainer}>
        <CancelButton />
      </View>

      {/* Track order */}
      <Pressable
        onPress={() => router.push("/screens/my-orders/order-tracking")}
        style={styles.trackOrderButton}
      >
        <Text style={styles.trackOrderText}>Track Order</Text>
      </Pressable>
    </ScrollView>
  );
};

export default Order;
