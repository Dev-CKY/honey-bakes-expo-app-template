import React, { memo, useEffect } from "react";
import { Image, Text, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  FadeIn,
  FadeOut,
  interpolate,
  LinearTransition,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { scheduleOnRN } from "react-native-worklets";

type NotificationType = {
  id: number | string;
  image: any;
  title: string;
  description: string;
  time: string;
};

const DELETE_THRESHOLD = -120;

const NotificationItem = memo(
  ({
    notification,
    index,
    isDeletingAll,
    onDelete,
  }: {
    notification: NotificationType;
    index: number;
    isDeletingAll: boolean;
    onDelete: (id: NotificationType["id"]) => void;
  }) => {
    const translateX = useSharedValue(0);
    const isRemoving = useSharedValue(false);

    const removeItem = () => {
      onDelete(notification.id);
    };

    useEffect(() => {
      if (!isDeletingAll || isRemoving.value) return;

      const timer = setTimeout(() => {
        isRemoving.value = true;

        translateX.value = withTiming(
          -500,
          {
            duration: 400,
          },
          (finished) => {
            if (finished) {
              scheduleOnRN(removeItem);
            }
          },
        );
      }, index * 90);

      return () => clearTimeout(timer);
    }, [isDeletingAll, index]);

    const panGesture = Gesture.Pan()
      .enabled(!isDeletingAll)
      .activeOffsetX([-15, 15])
      .onUpdate((event) => {
        if (event.translationX < 0) {
          translateX.value = event.translationX;
        }
      })
      .onEnd((event) => {
        const shouldDelete =
          translateX.value < DELETE_THRESHOLD || event.velocityX < -1000;

        if (shouldDelete) {
          isRemoving.value = true;

          translateX.value = withTiming(
            -500,
            {
              duration: 400,
            },
            (finished) => {
              if (finished) {
                scheduleOnRN(removeItem);
              }
            },
          );
        } else {
          translateX.value = withSpring(0, {
            damping: 18,
            stiffness: 180,
          });
        }
      });

    const cardStyle = useAnimatedStyle(() => ({
      transform: [
        {
          translateX: translateX.value,
        },
      ],
    }));

    const deleteBgStyle = useAnimatedStyle(() => ({
      opacity: interpolate(translateX.value, [0, -120], [0, 1]),
    }));

    return (
      <Animated.View
        layout={LinearTransition.springify().damping(18).stiffness(150)}
        entering={FadeIn.duration(500)}
        exiting={FadeOut.duration(250)}
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
            </View>
          </Animated.View>
        </GestureDetector>
      </Animated.View>
    );
  },
);

export default NotificationItem;
