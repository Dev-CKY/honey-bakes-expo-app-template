import { useNotificationSwipe } from "@/hooks/custom/useNotificationSwipe";
import React, { memo } from "react";
import { Image, Text, View } from "react-native";
import { GestureDetector } from "react-native-gesture-handler";
import Animated, {
  FadeIn,
  FadeOut,
  LinearTransition,
} from "react-native-reanimated";
import { scale } from "react-native-size-matters";

type NotificationType = {
  id: number | string;
  image: any;
  title: string;
  description: string;
  time: string;
};

const NotificationItem = memo(
  ({
    notification,
    isDeletingAll,
    onDelete,
  }: {
    notification: NotificationType;
    isDeletingAll: boolean;
    onDelete: (id: NotificationType["id"]) => void;
  }) => {
    const { panGesture, cardStyle, deleteBgStyle } = useNotificationSwipe({
      id: notification.id,
      isDeletingAll,
      onDelete,
    });

    return (
      <Animated.View
        layout={LinearTransition.springify().damping(18).stiffness(150)}
        entering={FadeIn.duration(400)}
        exiting={FadeOut.duration(300)}
      >
        <Animated.View
          style={[deleteBgStyle, { paddingHorizontal: scale(24) }]}
          className="absolute inset-0 bg-[#FF0000] items-start justify-center"
        >
          <Text
            className="text-white font-[poppins-medium]"
            style={{ fontSize: scale(14) }}
          >
            Delete
          </Text>
        </Animated.View>

        <GestureDetector gesture={panGesture}>
          <Animated.View
            style={[
              cardStyle,
              {
                paddingHorizontal: scale(20),
                paddingVertical: scale(20),
              },
            ]}
            className="flex-row items-start border-b border-[#F6F0D4] bg-[#FFFFE3]"
          >
            <View
              className="rounded-full bg-[#F6F0D4] items-center justify-center"
              style={{
                width: scale(48),
                height: scale(48),
                marginRight: scale(10),
              }}
            >
              <Image
                source={notification.image}
                style={{
                  width: scale(30),
                  height: scale(30),
                  borderRadius: scale(15),
                }}
              />
            </View>

            <View className="flex-1">
              <View className="flex-row items-center justify-between">
                <Text
                  className="text-[#1F1500] font-[poppins-medium] flex-1"
                  style={{
                    fontSize: scale(16),
                    marginRight: scale(12),
                  }}
                >
                  {notification.title}
                </Text>

                <Text
                  className="text-[#1F1500] font-[poppins-medium]"
                  style={{ fontSize: scale(14) }}
                >
                  {notification.time}
                </Text>
              </View>

              <Text
                className="text-[#C2A26F] font-[poppins-regular]"
                style={{
                  fontSize: scale(14),
                  marginTop: scale(2),
                }}
              >
                {notification.description}
              </Text>

              {isDeletingAll && (
                <Text
                  className="text-red-500 font-[poppins-medium]"
                  style={{
                    fontSize: scale(12),
                    marginTop: scale(6),
                  }}
                >
                  Deleting...
                </Text>
              )}
            </View>
          </Animated.View>
        </GestureDetector>
      </Animated.View>
    );
  },
);

export default NotificationItem;
