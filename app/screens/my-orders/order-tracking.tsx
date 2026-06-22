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
      className="flex-1 bg-[#FFFDE7]"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingBottom: scale(40),
      }}
      style={{ paddingHorizontal: scale(20), paddingTop: scale(20) }}
    >
      {/* Back Button */}
      <IconButtonWrapper icon={arrowLeft} onPress={() => router.back()} />

      {/* Heading */}
      <HeadingTitle size={32} title="Order Tracking" />

      {/* Ordered Item */}
      <View style={{ marginVertical: scale(20) }}>
        <HeadingTitle size={20} title="Ordered Item" />
      </View>

      <OrderedItemCard />

      {/* Timeline */}
      <View style={{ marginTop: scale(20) }}>
        {trackingSteps.map((item, index) => {
          // Check status
          const isCompleted = item.status === "completed";
          const isCurrent = item.status === "current";
          const isLastItem = index === trackingSteps.length - 1;
          const isActive = index <= currentStepIndex;
          const isLastCompleted = isCompleted && index === currentStepIndex - 1;

          return (
            <View key={index} style={{ flexDirection: "row" }}>
              {/* Left Side */}
              <View style={{ alignItems: "center", marginRight: scale(15) }}>
                {/* Circle with animation for current step */}
                {isCurrent ? (
                  <Animated.View
                    style={{
                      width: scale(24),
                      height: scale(24),
                      borderRadius: scale(24) / 2,
                      borderWidth: scale(2),
                      borderColor: "#F7BC5D",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Animated.View
                      style={[
                        {
                          width: scale(14),
                          height: scale(14),
                          borderRadius: scale(14) / 2,
                          backgroundColor: "#F7BC5D",
                        },
                        pulseStyle,
                      ]}
                    />
                  </Animated.View>
                ) : (
                  <View
                    style={{
                      width: scale(24),
                      height: scale(24),
                      borderRadius: scale(24) / 2,
                      borderWidth: scale(2),
                      borderColor: "#1F1500",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {/* Inner Dot */}
                    {(isCompleted || isCurrent) && (
                      <View
                        style={{
                          width: scale(14),
                          height: scale(14),
                          borderRadius: scale(14) / 2,
                          backgroundColor:
                            isCompleted || isCurrent
                              ? "#F7BC5D"
                              : "transparent",
                        }}
                      />
                    )}
                  </View>
                )}

                {/* Animated Line with gradient fill */}
                {!isLastItem && (
                  <View
                    style={{
                      position: "relative",
                      height: scale(70),
                      width: scale(2),
                      overflow: "hidden",
                    }}
                  >
                    {/* Base line (grey/dashed) */}
                    <View
                      style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        width: "100%",
                        height: "100%",
                        borderLeftWidth: scale(2),
                        borderStyle: "dashed",
                        borderLeftColor: isActive ? "#ffdca3" : "#1F1500",
                      }}
                    />

                    {/* Animated progress fill - only for the last completed step */}
                    {isLastCompleted && (
                      <Animated.View
                        style={[
                          lineAnimatedStyle,
                          {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            backgroundColor: "#F7BC5D",
                          },
                        ]}
                      />
                    )}

                    {/* Fully filled lines for other completed steps (not the last one) */}
                    {isCompleted && !isLastCompleted && (
                      <View
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          backgroundColor: "#F7BC5D",
                        }}
                      />
                    )}
                  </View>
                )}
              </View>

              {/* Right Side - No animation on text */}
              <View style={{ flex: 1, paddingBottom: scale(25) }}>
                {/* Title - static text */}
                <Text
                  style={{ fontSize: scale(18) }}
                  className="text-[#1F1500] font-[poppins-medium]"
                >
                  {item.title}
                </Text>

                {/* Time */}
                <Text
                  style={{ fontSize: scale(12), marginTop: scale(2) }}
                  className="text-[#C2A26F] font-[poppins-regular]"
                >
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
