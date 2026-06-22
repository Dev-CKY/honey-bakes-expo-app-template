import arrowLeft from "@/src/assets/icons/svg/arrowLeft";
import logout2 from "@/src/assets/icons/svg/logout2";
import pencil from "@/src/assets/icons/svg/pencil";
import plus from "@/src/assets/icons/svg/plus";
import HeadingTitle from "@/src/components/custom/HeadingTitle";
import IconButtonWrapper from "@/src/components/custom/IconButtonWrapper";
import Routes from "@/src/components/custom/Routes";
import PROFILE_ROUTES from "@/src/data/profile-routes.data";
import { router } from "expo-router";
import React from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { scale } from "react-native-size-matters";
import { SvgXml } from "react-native-svg";

const Profile = () => {
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
          <IconButtonWrapper icon={arrowLeft} onPress={() => router.back()} />

          {/* Heading */}
          <HeadingTitle size={32} title="My Profile" />
        </View>

        {/* Image avatar */}
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: scale(20),
          }}
        >
          <View style={{ position: "relative" }}>
            {/* Avatar */}
            <Image
              source={require("@/src/assets/images/custom/profile.jpg")}
              style={{
                height: scale(100),
                width: scale(100),
                borderRadius: scale(100) / 2,
              }}
            />

            {/* Floating Icon Button */}
            <Pressable
              onPress={() => {
                router.push("/screens/edit-profile");
              }}
              style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                height: scale(38),
                width: scale(38),
                alignItems: "center",
                justifyContent: "center",
                borderRadius: scale(38) / 2,
                borderWidth: scale(1),
                borderColor: "#1F1500",
                backgroundColor: "#F7BC5D",
              }}
            >
              <SvgXml xml={pencil} width={scale(18)} height={scale(18)} />
            </Pressable>
          </View>

          {/* Name */}
          <Text
            style={{ fontSize: scale(20), marginTop: scale(5) }}
            className="text-[#1F1500] font-[kalnia-medium]"
          >
            Mathew Doe
          </Text>

          {/* Email */}
          <Text
            style={{ fontSize: scale(14) }}
            className="text-[#C2A26F] font-[poppins-regular]"
          >
            mathew.doe@example.com
          </Text>
        </View>

        {/* Routes */}
        <Routes data={PROFILE_ROUTES} />

        {/* Others section */}
        <Text
          style={{
            fontSize: scale(20),
            padding: scale(20),
            marginTop: scale(5),
          }}
          className="text-[#1F1500] font-[kalnia-medium]"
        >
          Others
        </Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: scale(20),
          }}
        >
          {/* Account and add account icon */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: scale(20),
            }}
          >
            <View style={{ alignItems: "center" }}>
              <Image
                source={require("@/src/assets/images/custom/profile.jpg")}
                style={{
                  height: scale(54),
                  width: scale(54),
                  borderRadius: scale(54) / 2,
                }}
              />
              <Text
                style={{ fontSize: scale(14), marginTop: scale(2) }}
                className="text-[#1F1500] font-[poppins-regular]"
              >
                You
              </Text>
            </View>

            <Pressable style={{ alignItems: "center" }}>
              <View
                style={{
                  height: scale(54),
                  width: scale(54),
                  borderRadius: scale(54) / 2,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#F6F0D4",
                }}
              >
                <SvgXml xml={plus} />
              </View>
              <Text
                style={{ fontSize: scale(14), marginTop: scale(2) }}
                className="text-[#1F1500] font-[poppins-regular]"
              >
                Add
              </Text>
            </Pressable>
          </View>

          {/* Logout */}
          <Pressable style={{ alignItems: "center" }}>
            <View
              style={{
                height: scale(54),
                width: scale(54),
                borderRadius: scale(54) / 2,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#F7BC5D",
                borderWidth: scale(1.5),
                borderColor: "#1F1500",
              }}
            >
              <SvgXml xml={logout2} />
            </View>
            <Text
              style={{ fontSize: scale(14), marginTop: scale(2) }}
              className="text-[#1F1500] font-[poppins-regular]"
            >
              Logout
            </Text>
          </Pressable>
        </View>
      </>
    </ScrollView>
  );
};

export default Profile;
