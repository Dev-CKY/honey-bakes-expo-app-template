import { useMyOrders } from "@/hooks/custom/useMyOrders";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";

import arrowRight from "@/src/assets/icons/svg/arrowRight";
import calendar from "@/src/assets/icons/svg/calender";
import clock from "@/src/assets/icons/svg/clock";
import { router } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";
import { scale } from "react-native-size-matters";
import { SvgXml } from "react-native-svg";

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
        className="flex-row border-b border-[#ECE5C8]"
        onPress={() => router.push("/screens/my-orders/order")}
        style={{ paddingHorizontal: scale(20), paddingVertical: scale(20) }}
      >
        {/* Product Image */}
        <Image
          source={item.image}
          resizeMode="cover"
          style={{
            height: scale(90),
            width: scale(90),
            borderRadius: scale(14),
          }}
        />

        {/* Content */}
        <View style={{ marginLeft: scale(14), flex: 1 }}>
          {/* Title */}
          <View className="flex-row items-start justify-between">
            <Text
              className="flex-1 font-[poppins-medium] text-[#2A1F15]"
              style={{ fontSize: scale(20) }}
            >
              {item.name}
            </Text>

            <SvgXml xml={arrowRight} width={scale(24)} height={scale(24)} />
          </View>

          {/* Status Badge */}
          <View
            style={{
              marginTop: scale(10),
              alignSelf: "flex-start",
              borderRadius: scale(999),
              paddingHorizontal: scale(16),
              paddingVertical: scale(7),
              backgroundColor: badgeBg,
            }}
          >
            <Text
              className="font-[poppins-medium]"
              style={{ fontSize: scale(14), color: textColor }}
            >
              {item.status}
            </Text>
          </View>

          {/* Date & Time */}
          <View
            style={{
              marginTop: scale(10),
            }}
          >
            {/* Date */}
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <SvgXml xml={calendar} width={scale(16)} height={scale(16)} />

              <Text
                style={{ marginLeft: scale(6), fontSize: scale(14) }}
                className="font-[poppins-regular] text-[#C59B61]"
              >
                {item.date}
              </Text>
            </View>

            {/* Space */}
            <View style={{ width: scale(12) }} />

            {/* Time */}
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <SvgXml xml={clock} width={scale(16)} height={scale(16)} />

              <Text
                style={{ marginLeft: scale(6), fontSize: scale(14) }}
                className="font-[poppins-regular] text-[#C59B61]"
              >
                {item.time}
              </Text>
            </View>
          </View>
        </View>
      </Pressable>
    </Animated.View>
  );
};

export default OrderCard;
