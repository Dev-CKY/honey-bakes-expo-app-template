import arrowLeft from "@/src/assets/icons/svg/arrowLeft";
import bin from "@/src/assets/icons/svg/bin";
import logout from "@/src/assets/icons/svg/logout";
import HeadingTitle from "@/src/components/custom/HeadingTitle";
import Routes from "@/src/components/custom/Routes";
import Switch from "@/src/components/custom/Switch";
import { APP_CONTROLS, SETTINGS_ROUTES } from "@/src/data/settings-routes.data";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { scale } from "react-native-size-matters";
import { SvgXml } from "react-native-svg";

const Settings = () => {
  const [switchStates, setSwitchStates] = useState({
    notifications: false,
    darkMode: false,
  });

  type SwitchKey = keyof typeof switchStates;

  const handleSwitchChange = (key: SwitchKey, value: boolean) => {
    setSwitchStates((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <ScrollView
      className="flex-1 bg-[#FFFFE3] py-[20px]"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingBottom: scale(120),
      }}
    >
      <>
        <View className="px-[20px]">
          {/* Back button */}
          <Pressable
            className="border border-[1px] w-[48px] h-[48px] items-center justify-center rounded-full mb-[20px]"
            onPress={() => router.back()}
          >
            <SvgXml xml={arrowLeft} className="w-[24px] h-[24px]" />
          </Pressable>

          {/* Heading */}
          <HeadingTitle size={32} title="Settings" />
        </View>

        {/* Subheading */}
        <View className="m-[20px]">
          <HeadingTitle size={20} title="Profile & Security" />
        </View>

        {/* Routes */}
        <Routes data={SETTINGS_ROUTES} />

        {/* Notification & Theme */}
        <View>
          {/* Title */}
          <View className="m-[20px]">
            <HeadingTitle size={20} title="Notification & Theme" />
          </View>

          {/* Data */}
          {APP_CONTROLS.map((item, index) => (
            <View
              key={index}
              className="mt-[20px] px-[20px] border-b border-[#F6F0D4] flex-row items-center justify-between pb-[20px]"
            >
              {/* Icon and Text */}
              <View className="flex-row items-center gap-[15px]">
                <View className="h-[48px] w-[48px] rounded-full bg-[#F6F0D4] flex-row items-center justify-center">
                  <SvgXml xml={item.icon} className="w-[24px] h-[24px]" />
                </View>

                <Text className="text-[16px] text-[#1F1500] font-[poppins-medium]">
                  {item.routeName}
                </Text>
              </View>

              {/* Switch */}
              <Switch
                value={switchStates[item.key as SwitchKey]}
                onChange={(value: boolean) =>
                  handleSwitchChange(item.key as SwitchKey, value)
                }
              />
            </View>
          ))}
        </View>

        {/* Logout & Delete Account */}

        <View className="flex-row items-center justify-between mt-[20px] mb-[20px] px-[20px]">
          {/* Logout Text */}
          <Text className="text-[16px] text-[#F7715D] font-[poppins-medium]">
            Logout
          </Text>

          {/* Logout Icon */}
          <TouchableOpacity onPress={() => {}}>
            <SvgXml xml={logout} className="w-[24px] h-[24px]" />
          </TouchableOpacity>
        </View>

        {/* Delete Account */}
        <View className="flex-row items-center justify-between mt-[20px] mb-[20px] px-[20px]">
          {/* Delete Account Text */}
          <Text className="text-[16px] text-[#F7715D] font-[poppins-medium]">
            Delete Account
          </Text>

          {/* Delete Account Icon */}
          <TouchableOpacity onPress={() => {}}>
            <SvgXml xml={bin} className="w-[24px] h-[24px]" />
          </TouchableOpacity>
        </View>
      </>
    </ScrollView>
  );
};

export default Settings;
