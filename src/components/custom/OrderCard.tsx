// ======================================================
// Hook Values
// ======================================================

import { useMyOrders } from "@/hooks/custom/useMyOrders";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";

import arrowRight from "@/src/assets/icons/svg/arrowRight";
import calendar from "@/src/assets/icons/svg/calender";
import clock from "@/src/assets/icons/svg/clock";
import { Image, Pressable, Text, View } from "react-native";
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
      <Pressable className="flex-row border-b border-[#ECE5C8] px-[20px] py-[20px]">
        {/* Product Image */}
        <Image
          source={item.image}
          resizeMode="cover"
          className="h-[90px] w-[90px] rounded-[14px]"
        />

        {/* Content */}
        <View className="ml-[14px] flex-1">
          {/* Title */}
          <View className="flex-row items-start justify-between">
            <Text
              numberOfLines={1}
              className="flex-1 font-[poppins-medium] text-[20px] text-[#2A1F15]"
            >
              {item.name}
            </Text>

            <SvgXml xml={arrowRight} />
          </View>

          {/* Status Badge */}
          <View
            className="mt-[10px] self-start rounded-full px-[16px] py-[7px]"
            style={{
              backgroundColor: badgeBg,
            }}
          >
            <Text
              className="font-[poppins-medium] text-[14px]"
              style={{
                color: textColor,
              }}
            >
              {item.status}
            </Text>
          </View>

          {/* Date & Time */}
          <View className="mt-[10px] flex-row items-center">
            {/* Date */}
            <View className="flex-row items-center">
              <SvgXml xml={calendar} width={16} height={16} />

              <Text className="ml-[6px] font-[poppins-regular] text-[14px] text-[#C59B61]">
                {item.date}
              </Text>
            </View>

            {/* Space */}
            <View className="w-[12px]" />

            {/* Time */}
            <View className="flex-row items-center">
              <SvgXml xml={clock} width={16} height={16} />

              <Text className="ml-[6px] font-[poppins-regular] text-[14px] text-[#C59B61]">
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
