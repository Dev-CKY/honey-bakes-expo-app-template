import plus from "@/src/assets/icons/svg/plus";
import DRAWER_NAVIGATION_MENU_ITEMS from "@/src/data/drawer-navigation.data";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { router } from "expo-router";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { scale } from "react-native-size-matters";
import { SvgXml } from "react-native-svg";

export default function CustomDrawerContent(props: any) {
  return (
    <DrawerContentScrollView
      {...props}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        flexGrow: 1,
      }}
      className="bg-[#FFFFE3]"
    >
      {/* Profile */}
      <Pressable
        onPress={() => {
          router.push("/profile");
        }}
        className="px-5"
      >
        <View className="flex-row items-center">
          <Image
            source={require("@/src/assets/images/custom/icons/avatar2.png")}
            className="w-[44px] h-[44px] rounded-full"
          />

          <Text className="font-[poppins-medium] text-[15px] text-[#1F1500] ml-3">
            Michel Jordan
          </Text>
        </View>
      </Pressable>

      {/* Divider */}
      <View className="h-[1px] bg-[#E3DEC0] mt-6" />

      {/* Add Account */}
      <Pressable className="self-start flex-row items-center justify-center px-[20px] h-[50px] mt-[20px] bg-[#F7BC5D] border border-[#1F1500] rounded-full">
        <SvgXml xml={plus} width={scale(18)} height={scale(18)} />

        <Text className="font-[poppins-medium] text-[14px] text-[#1F1500] mt-[2px]">
          Add account
        </Text>
      </Pressable>

      {/* Menu */}
      <View className="pt-[20px] gap-[30px]">
        {DRAWER_NAVIGATION_MENU_ITEMS.map((item) => (
          <Pressable
            onPress={() => router.push(item.route)}
            key={item.title}
            className="flex-row items-center"
          >
            <View className="w-[44px] h-[44px] rounded-full bg-[#F6F0D4] items-center justify-center mr-4">
              <SvgXml xml={item.icon} />
            </View>

            <Text className="font-[poppins-medium] text-[16px] text-[#1F1500]">
              {item.title}
            </Text>
          </Pressable>
        ))}
      </View>
    </DrawerContentScrollView>
  );
}
