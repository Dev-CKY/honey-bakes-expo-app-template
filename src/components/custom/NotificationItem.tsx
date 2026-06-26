import { useNotificationSwipe } from "@/hooks/custom/useNotificationSwipe";
import React, { memo } from "react";
import { Image, Text, View } from "react-native";
import { GestureDetector } from "react-native-gesture-handler";
import Animated, {
  FadeIn,
  FadeOut,
  LinearTransition,
} from "react-native-reanimated";
import styles from "../../styles/components/notificationItem.styles";

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
          style={[deleteBgStyle, { paddingHorizontal: 24 }, styles.deleteBg]}
        >
          <Text style={styles.deleteText}>Delete</Text>
        </Animated.View>

        <GestureDetector gesture={panGesture}>
          <Animated.View
            style={[
              cardStyle,
              styles.card,
              { paddingHorizontal: 20, paddingVertical: 20 },
            ]}
          >
            <View style={styles.avatarWrap}>
              <Image source={notification.image} style={styles.avatar} />
            </View>

            <View style={styles.content}>
              <View style={styles.titleRow}>
                <Text style={styles.title}>{notification.title}</Text>

                <Text style={styles.time}>{notification.time}</Text>
              </View>

              <Text style={styles.description}>{notification.description}</Text>

              {isDeletingAll && (
                <Text style={styles.deleting}>Deleting...</Text>
              )}
            </View>
          </Animated.View>
        </GestureDetector>
      </Animated.View>
    );
  },
);

export default NotificationItem;
