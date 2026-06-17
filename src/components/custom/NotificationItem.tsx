import { useNotificationSwipe } from "@/hooks/custom/useNotificationSwipe";
import React, { memo } from "react";
import { Image, Text, View } from "react-native";
import { GestureDetector } from "react-native-gesture-handler";
import Animated, {
  FadeIn,
  FadeOut,
  LinearTransition,
} from "react-native-reanimated";

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
          style={deleteBgStyle}
          className="absolute inset-0 bg-[#FF0000] items-start justify-center px-[24px]"
        >
          <Text className="text-white text-[14px] font-[poppins-medium]">
            Delete
          </Text>
        </Animated.View>

        <GestureDetector gesture={panGesture}>
          <Animated.View
            style={cardStyle}
            className="px-[20px] py-[20px] flex-row items-start border-b border-[#F6F0D4] bg-[#FFFFE3]"
          >
            <View className="w-[48px] h-[48px] rounded-full bg-[#F6F0D4] items-center justify-center mr-[10px]">
              <Image
                source={notification.image}
                className="w-[30px] h-[30px] rounded-full"
              />
            </View>

            <View className="flex-1">
              <View className="flex-row items-center justify-between">
                <Text className="text-[#1F1500] text-[16px] font-[poppins-medium] flex-1 mr-[12px]">
                  {notification.title}
                </Text>

                <Text className="text-[#1F1500] text-[14px] font-[poppins-medium]">
                  {notification.time}
                </Text>
              </View>

              <Text className="text-[#C2A26F] text-[14px] font-[poppins-regular] mt-[2px]">
                {notification.description}
              </Text>

              {isDeletingAll && (
                <Text className="text-red-500 text-[12px] font-[poppins-medium] mt-[6px]">
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
