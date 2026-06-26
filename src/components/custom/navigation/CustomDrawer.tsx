import DRAWER_NAVIGATION_MENU_ITEMS from "@/src/data/drawer-navigation.data";
import styles from "@/src/styles/navigations/drawer.styles";
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
      contentContainerStyle={styles.container}
    >
      {/* Profile */}
      <Pressable
        onPress={() => {
          router.push("/profile");
        }}
      >
        <View style={styles.profileRow}>
          <Image
            source={require("@/src/assets/images/custom/icons/avatar2.png")}
            style={styles.avatar}
          />

          <Text style={styles.profileName}>Michel Jordan</Text>
        </View>
      </Pressable>

      {/* Divider */}
      <View style={styles.divider} />

      {/* Menu */}
      <View style={styles.menuContainer}>
        {DRAWER_NAVIGATION_MENU_ITEMS.map((item) => (
          <Pressable
            key={item.title}
            onPress={() => router.push(item.route)}
            style={styles.menuItem}
          >
            <View style={styles.iconContainer}>
              <SvgXml xml={item.icon} width={scale(24)} height={scale(24)} />
            </View>

            <Text style={styles.menuTitle}>{item.title}</Text>
          </Pressable>
        ))}
      </View>
    </DrawerContentScrollView>
  );
}
