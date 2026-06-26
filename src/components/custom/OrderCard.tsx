import { useMyOrders } from "@/hooks/custom/useMyOrders";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";

import arrowRight from "@/src/assets/icons/svg/arrowRight";
import calendar from "@/src/assets/icons/svg/calender";
import clock from "@/src/assets/icons/svg/clock";
import { router } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";
import { SvgXml } from "react-native-svg";
import styles from "../../styles/components/orderCard.styles";

// ======================================================
// Order Card Component
// ======================================================

const OrderCard = ({ item }: any) => {
  const { getStatusStyles } = useMyOrders();

  const { badgeBg, textColor } = getStatusStyles(item.status);

  return (
    <Animated.View
      entering={FadeIn.duration(700)}
      exiting={FadeOut.duration(700)}
    >
      <Pressable
        onPress={() => router.push("/screens/my-orders/order")}
        style={styles.pressable}
      >
        {/* Product Image */}
        <Image source={item.image} resizeMode="cover" style={styles.image} />

        {/* Content */}
        <View style={styles.content}>
          {/* Title */}
          <View style={styles.titleRow}>
            <Text style={styles.titleText}>{item.name}</Text>
            <SvgXml xml={arrowRight} width={24} height={24} />
          </View>

          {/* Status Badge */}
          <View style={[styles.statusBadge, { backgroundColor: badgeBg }]}>
            <Text style={[styles.statusText, { color: textColor }]}>
              {item.status}
            </Text>
          </View>

          {/* Date & Time */}
          <View style={styles.dateRow}>
            {/* Date */}
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <SvgXml xml={calendar} width={16} height={16} />

              <Text style={styles.dateText}>{item.date}</Text>
            </View>

            {/* Space */}
            <View style={styles.spacer} />

            {/* Time */}
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <SvgXml xml={clock} width={16} height={16} />

              <Text style={styles.dateText}>{item.time}</Text>
            </View>
          </View>
        </View>
      </Pressable>
    </Animated.View>
  );
};

export default OrderCard;
