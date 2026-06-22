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
        style={{ paddingHorizontal: scale(20) }}
      >
        <View className="flex-row items-center">
          <Image
            source={require("@/src/assets/images/custom/icons/avatar2.png")}
            className="rounded-full"
            style={{ width: scale(44), height: scale(44) }}
          />

          <Text
            className="font-[poppins-medium] text-[#1F1500]"
            style={{ fontSize: scale(15), marginLeft: scale(12) }}
          >
            Michel Jordan
          </Text>
        </View>
      </Pressable>

      {/* Divider */}
      <View
        className="bg-[#E3DEC0]"
        style={{ height: scale(1), marginTop: scale(20) }}
      />

      {/* Menu */}
      <View style={{ paddingTop: scale(20), gap: scale(30) }}>
        {DRAWER_NAVIGATION_MENU_ITEMS.map((item) => (
          <Pressable
            onPress={() => router.push(item.route)}
            key={item.title}
            className="flex-row items-center"
          >
            <View
              style={{
                width: scale(44),
                height: scale(44),
                marginRight: scale(16),
              }}
              className="rounded-full bg-[#F6F0D4] items-center justify-center"
            >
              <SvgXml xml={item.icon} width={scale(24)} height={scale(24)} />
            </View>

            <Text
              className="font-[poppins-medium] text-[#1F1500]"
              style={{ fontSize: scale(16) }}
            >
              {item.title}
            </Text>
          </Pressable>
        ))}
      </View>
    </DrawerContentScrollView>
  );
}
