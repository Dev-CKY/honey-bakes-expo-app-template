import { useLineProgressAnimation } from "@/hooks/custom/useLineProgressAnimation";
import { usePulseAnimation } from "@/hooks/custom/usePulseAnimation";
import arrowLeft from "@/src/assets/icons/svg/arrowLeft";
import CancelButton from "@/src/components/custom/CancelButton";
import HeadingTitle from "@/src/components/custom/HeadingTitle";
import IconButtonWrapper from "@/src/components/custom/IconButtonWrapper";
import OrderedItemCard from "@/src/components/custom/OrderedItemCard";
import styles from "@/src/styles/screens/orderTracking.styles";
import { router } from "expo-router";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import Animated from "react-native-reanimated";

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
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.contentContainer}
    >
      {/* Back Button */}
      <IconButtonWrapper icon={arrowLeft} onPress={() => router.back()} />

      {/* Heading */}
      <HeadingTitle size={32} title="Order Tracking" />

      {/* Ordered Item */}
      <View style={styles.orderedItemHeading}>
        <HeadingTitle size={20} title="Ordered Item" />
      </View>

      <OrderedItemCard />

      {/* Timeline */}
      <View style={styles.timelineContainer}>
        {trackingSteps.map((item, index) => {
          // Check status
          const isCompleted = item.status === "completed";
          const isCurrent = item.status === "current";
          const isLastItem = index === trackingSteps.length - 1;
          const isActive = index <= currentStepIndex;
          const isLastCompleted = isCompleted && index === currentStepIndex - 1;

          return (
            <View key={index} style={styles.timelineRow}>
              {/* Left Side */}
              <View style={styles.timelineLeft}>
                {/* Circle with animation for current step */}
                {isCurrent ? (
                  <Animated.View style={styles.currentOuterCircle}>
                    <Animated.View
                      style={[styles.currentInnerCircle, pulseStyle]}
                    />
                  </Animated.View>
                ) : (
                  <View style={styles.circle}>
                    {/* Inner Dot */}
                    {(isCompleted || isCurrent) && (
                      <View style={styles.circleInner} />
                    )}
                  </View>
                )}

                {/* Animated Line with gradient fill */}
                {!isLastItem && (
                  <View style={styles.lineContainer}>
                    {/* Base line (grey/dashed) */}
                    <View
                      style={[
                        styles.lineBase,
                        {
                          borderLeftColor: isActive ? "#ffdca3" : "#1F1500",
                        },
                      ]}
                    />

                    {/* Animated progress fill - only for the last completed step */}
                    {isLastCompleted && (
                      <Animated.View
                        style={[lineAnimatedStyle, styles.animatedLine]}
                      />
                    )}

                    {/* Fully filled lines for other completed steps (not the last one) */}
                    {isCompleted && !isLastCompleted && (
                      <View style={styles.completedLine} />
                    )}
                  </View>
                )}
              </View>

              {/* Right Side - No animation on text */}
              <View style={styles.timelineContent}>
                {/* Title - static text */}
                <Text style={styles.title}>{item.title}</Text>

                {/* Time */}
                <Text style={styles.time}>{item.time}</Text>
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
