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
      className="flex-1 bg-[#FFFFE3]"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingBottom: scale(120),
      }}
      style={{ paddingVertical: scale(20) }}
    >
      <>
        <View style={{ paddingHorizontal: scale(20) }}>
          {/* Back button */}
          <Pressable
            className="border rounded-full items-center justify-center"
            onPress={() => router.back()}
            style={{
              width: scale(48),
              height: scale(48),
              borderWidth: scale(1),
              marginBottom: scale(20),
            }}
          >
            <SvgXml xml={arrowLeft} width={scale(24)} height={scale(24)} />
          </Pressable>

          {/* Heading */}
          <HeadingTitle size={32} title="Settings" />
        </View>

        {/* Subheading */}
        <View style={{ marginHorizontal: scale(20), marginTop: scale(20) }}>
          <HeadingTitle size={20} title="Profile & Security" />
        </View>

        {/* Routes */}
        <Routes data={SETTINGS_ROUTES} />

        {/* Notification */}
        <View>
          {/* Title */}
          <View style={{ marginHorizontal: scale(20), marginTop: scale(20) }}>
            <HeadingTitle size={20} title="Notification" />
          </View>

          {/* Data */}
          {APP_CONTROLS.map((item, index) => (
            <View
              key={index}
              className="border-b border-[#F6F0D4] flex-row items-center justify-between"
              style={{
                marginTop: scale(20),
                paddingHorizontal: scale(20),
                paddingBottom: scale(20),
              }}
            >
              {/* Icon and Text */}
              <View
                className="flex-row items-center"
                style={{ columnGap: scale(15) }}
              >
                <View
                  className="rounded-full bg-[#F6F0D4] flex-row items-center justify-center"
                  style={{
                    height: scale(48),
                    width: scale(48),
                    borderRadius: scale(48) / 2,
                  }}
                >
                  <SvgXml
                    xml={item.icon}
                    width={scale(24)}
                    height={scale(24)}
                  />
                </View>

                <Text
                  style={{ fontSize: scale(16) }}
                  className="text-[#1F1500] font-[poppins-medium]"
                >
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

        <View
          className="flex-row items-center justify-between"
          style={{
            marginTop: scale(20),
            marginBottom: scale(20),
            paddingHorizontal: scale(20),
          }}
        >
          {/* Logout Text */}
          <Text
            style={{ fontSize: scale(16) }}
            className="text-[#F7715D] font-[poppins-medium]"
          >
            Logout
          </Text>

          {/* Logout Icon */}
          <TouchableOpacity onPress={() => {}}>
            <SvgXml xml={logout} width={scale(24)} height={scale(24)} />
          </TouchableOpacity>
        </View>

        {/* Delete Account */}
        <View
          className="flex-row items-center justify-between"
          style={{
            marginTop: scale(20),
            marginBottom: scale(20),
            paddingHorizontal: scale(20),
          }}
        >
          {/* Delete Account Text */}
          <Text
            style={{ fontSize: scale(16) }}
            className="text-[#F7715D] font-[poppins-medium]"
          >
            Delete Account
          </Text>

          {/* Delete Account Icon */}
          <TouchableOpacity onPress={() => {}}>
            <SvgXml xml={bin} width={scale(24)} height={scale(24)} />
          </TouchableOpacity>
        </View>
      </>
    </ScrollView>
  );
};

export default Settings;
