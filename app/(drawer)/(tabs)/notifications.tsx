import arrowLeft from "@/src/assets/icons/svg/arrowLeft";
import bin2 from "@/src/assets/icons/svg/bin2";
import HeadingTitle from "@/src/components/custom/HeadingTitle";
import IconButtonWrapper from "@/src/components/custom/IconButtonWrapper";
import NOTIFICATIONS_LIST from "@/src/data/notifications-list.data";
import { router } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { scale } from "react-native-size-matters";

const Notifications = () => {
  return (
    <ScrollView
      className="flex-1 bg-[#FFFFE3] py-[20px]"
      showsVerticalScrollIndicator={false}
      bounces={false}
      contentContainerStyle={{
        paddingBottom: scale(120),
      }}
    >
      <View className="flex-row items-center justify-between px-[20px]">
        {/* Back button */}
        <IconButtonWrapper icon={arrowLeft} onPress={() => router.back()} />

        {/* Delete Button */}
        <IconButtonWrapper icon={bin2} onPress={() => {}} />
      </View>

      {/* Heading */}
      <View className="px-[20px]">
        <HeadingTitle title="Notifications" />
      </View>

      {/* Notifications List */}
      {NOTIFICATIONS_LIST.map((notification) => (
        <View
          key={notification.id}
          className="px-[20px] py-[20px]  flex-row items-start border-b border-b-[1px] border-[#F6F0D4]"
        >
          {/* Icon */}
          <View className="w-[48px] h-[48px] rounded-full bg-[#F6F0D4] items-center justify-center mr-[10px]">
            <Image
              source={notification.image}
              className="w-[30px] h-[30px] rounded-full"
            />
          </View>

          {/* Content */}
          <View className="flex-1">
            <View className="flex-row items-center justify-between">
              <Text className="text-[#1F1500] text-[16px] font-[poppins-medium]">
                {notification.title}
              </Text>

              <Text className="text-[#1F1500] text-[14px] font-[poppins-medium]">
                {notification.time}
              </Text>
            </View>

            <Text className="text-[#C2A26F] text-[14px] font-[poppins-regular]">
              {notification.description}
            </Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default Notifications;
