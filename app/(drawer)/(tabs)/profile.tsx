import arrowLeft from "@/src/assets/icons/svg/arrowLeft";
import logout2 from "@/src/assets/icons/svg/logout2";
import pencil from "@/src/assets/icons/svg/pencil";
import plus from "@/src/assets/icons/svg/plus";
import HeadingTitle from "@/src/components/custom/HeadingTitle";
import IconButtonWrapper from "@/src/components/custom/IconButtonWrapper";
import Routes from "@/src/components/custom/Routes";
import PROFILE_ROUTES from "@/src/data/profile-routes.data";
import styles from "@/src/styles/screens/profile.styles";
import { router } from "expo-router";
import React from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { scale } from "react-native-size-matters";
import { SvgXml } from "react-native-svg";

const Profile = () => {
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.contentContainer}
    >
      <>
        <View style={styles.headerContainer}>
          {/* Back button */}
          <IconButtonWrapper icon={arrowLeft} onPress={() => router.back()} />

          {/* Heading */}
          <HeadingTitle size={32} title="My Profile" />
        </View>

        {/* Image avatar */}
        <View style={styles.avatarWrapper}>
          <View style={styles.avatarContainer}>
            {/* Avatar */}
            <Image
              source={require("@/src/assets/images/custom/profile.jpg")}
              style={styles.avatarImage}
            />

            {/* Floating Icon Button */}
            <Pressable
              onPress={() => {
                router.push("/screens/edit-profile");
              }}
              style={styles.editButton}
            >
              <SvgXml xml={pencil} width={scale(18)} height={scale(18)} />
            </Pressable>
          </View>

          {/* Name */}
          <Text style={styles.nameText}>Mathew Doe</Text>

          {/* Email */}
          <Text style={styles.emailText}>mathew.doe@example.com</Text>
        </View>

        {/* Routes */}
        <Routes data={PROFILE_ROUTES} />

        {/* Others section */}
        <Text style={styles.othersTitle}>Others</Text>

        <View style={styles.othersContainer}>
          {/* Account and add account icon */}
          <View style={styles.accountContainer}>
            <View style={styles.accountItem}>
              <Image
                source={require("@/src/assets/images/custom/profile.jpg")}
                style={styles.smallAvatar}
              />
              <Text style={styles.accountLabel}>You</Text>
            </View>

            <Pressable style={styles.accountItem}>
              <View style={styles.addButton}>
                <SvgXml xml={plus} />
              </View>
              <Text style={styles.accountLabel}>Add</Text>
            </Pressable>
          </View>

          {/* Logout */}
          <Pressable style={styles.accountItem}>
            <View style={styles.logoutButton}>
              <SvgXml xml={logout2} />
            </View>
            <Text style={styles.accountLabel}>Logout</Text>
          </Pressable>
        </View>
      </>
    </ScrollView>
  );
};

export default Profile;
