import arrowLeft from "@/src/assets/icons/svg/arrowLeft";
import bin from "@/src/assets/icons/svg/bin";
import logout from "@/src/assets/icons/svg/logout";
import HeadingTitle from "@/src/components/custom/HeadingTitle";
import Routes from "@/src/components/custom/Routes";
import Switch from "@/src/components/custom/Switch";
import { APP_CONTROLS, SETTINGS_ROUTES } from "@/src/data/settings-routes.data";
import styles from "@/src/styles/screens/settings.styles";
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
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.contentContainer}
    >
      <>
        <View style={styles.headerContainer}>
          {/* Back button */}
          <Pressable style={styles.backButton} onPress={() => router.back()}>
            <SvgXml xml={arrowLeft} width={scale(24)} height={scale(24)} />
          </Pressable>

          {/* Heading */}
          <HeadingTitle size={32} title="Settings" />
        </View>

        {/* Subheading */}
        <View style={styles.sectionTitleContainer}>
          <HeadingTitle size={20} title="Profile & Security" />
        </View>

        {/* Routes */}
        <Routes data={SETTINGS_ROUTES} />

        {/* Notification */}
        <View>
          {/* Title */}
          <View style={styles.sectionTitleContainer}>
            <HeadingTitle size={20} title="Notification" />
          </View>

          {/* Data */}
          {APP_CONTROLS.map((item, index) => (
            <View key={index} style={styles.notificationItem}>
              {/* Icon and Text */}
              <View style={styles.notificationLeft}>
                <View style={styles.notificationIconWrapper}>
                  <SvgXml
                    xml={item.icon}
                    width={scale(24)}
                    height={scale(24)}
                  />
                </View>

                <Text style={styles.notificationText}>{item.routeName}</Text>
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
        <View style={styles.actionRow}>
          {/* Logout Text */}
          <Text style={styles.dangerText}>Logout</Text>

          {/* Logout Icon */}
          <TouchableOpacity onPress={() => {}}>
            <SvgXml xml={logout} width={scale(24)} height={scale(24)} />
          </TouchableOpacity>
        </View>

        {/* Delete Account */}
        <View style={styles.actionRow}>
          {/* Delete Account Text */}
          <Text style={styles.dangerText}>Delete Account</Text>

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
