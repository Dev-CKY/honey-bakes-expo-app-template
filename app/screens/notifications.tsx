import arrowLeft from "@/src/assets/icons/svg/arrowLeft";
import bin2 from "@/src/assets/icons/svg/bin2";
import HeadingTitle from "@/src/components/custom/HeadingTitle";
import IconButtonWrapper from "@/src/components/custom/IconButtonWrapper";
import NotificationItem from "@/src/components/custom/NotificationItem";
import NOTIFICATIONS_LIST from "@/src/data/notifications-list.data";
import { router } from "expo-router";
import React, { useCallback, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";
import { scale } from "react-native-size-matters";

type NotificationType = {
  id: number | string;
  image: any;
  title: string;
  description: string;
  time: string;
};

const Notifications = () => {
  const [notifications, setNotifications] =
    useState<NotificationType[]>(NOTIFICATIONS_LIST);

  const [isDeletingAll, setIsDeletingAll] = useState(false);

  const deleteNotification = useCallback((id: NotificationType["id"]) => {
    setNotifications((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const deleteAllNotifications = () => {
    if (!notifications.length || isDeletingAll) return;

    setIsDeletingAll(true);

    const totalDuration = notifications.length * 90 + 800;

    setTimeout(() => {
      setNotifications([]);
      setIsDeletingAll(false);
    }, totalDuration);
  };

  return (
    <ScrollView
      className="flex-1 bg-[#FFFFE3]"
      showsVerticalScrollIndicator={false}
      style={{ paddingVertical: scale(20) }}
      contentContainerStyle={{
        flexGrow: 1,
        paddingBottom: scale(20),
      }}
    >
      {/* Header */}
      <View
        className="flex-row items-center justify-between"
        style={{ paddingHorizontal: scale(20) }}
      >
        <IconButtonWrapper icon={arrowLeft} onPress={() => router.back()} />

        {notifications.length > 0 && (
          <IconButtonWrapper icon={bin2} onPress={deleteAllNotifications} />
        )}
      </View>

      {/* Heading */}
      <View style={{ paddingHorizontal: scale(20) }}>
        <HeadingTitle size={32} title="Notifications" />
      </View>

      {/* Empty State */}
      {notifications.length === 0 ? (
        <Animated.View
          entering={FadeIn.duration(900).delay(150)}
          className="flex-1 items-center justify-center"
        >
          <Text
            style={{ fontSize: scale(22) }}
            className="text-[#1F1500] font-[poppins-semibold]"
          >
            No Notifications
          </Text>

          <Text
            style={{
              marginTop: scale(8),
              paddingHorizontal: scale(32),
              fontSize: scale(16),
            }}
            className="text-[#C2A26F] text-center font-[poppins-regular]"
          >
            You're all caught up. New notifications will appear here.
          </Text>
        </Animated.View>
      ) : (
        notifications.map((notification) => (
          <NotificationItem
            key={notification.id}
            notification={notification}
            isDeletingAll={isDeletingAll}
            onDelete={deleteNotification}
          />
        ))
      )}
    </ScrollView>
  );
};

export default Notifications;
