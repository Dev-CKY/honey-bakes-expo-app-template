import arrowLeft from "@/src/assets/icons/svg/arrowLeft";
import pencil from "@/src/assets/icons/svg/pencil";
import HeadingTitle from "@/src/components/custom/HeadingTitle";
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
      className="flex-1 bg-[#FFFFE3] py-[20px]"
      showsVerticalScrollIndicator={false}
      bounces={false}
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
          <HeadingTitle title="My Profile" />
        </View>

        {/* Image avatar */}
        <View className="items-center justify-center mt-[20px]">
          <View className="relative">
            {/* Avatar */}
            <Image
              source={require("@/src/assets/images/custom/profile.jpg")}
              className="h-[100px] w-[100px] rounded-full"
            />

            {/* Floating Icon Button */}
            <Pressable className="absolute bottom-0 right-0 h-[38px] w-[38px] items-center justify-center rounded-full border border-[#1F1500] bg-[#F7BC5D]">
              <SvgXml xml={pencil} />
            </Pressable>
          </View>

          {/* Name */}
          <Text className="text-[20px] text-[#1F1500] font-[kalnia-medium] mt-[5px]">
            Mathew Doe
          </Text>

          {/* Email */}
          <Text className="text-[14px] text-[#C2A26F] font-[poppins-regular]">
            mathew.doe@example.com
          </Text>
        </View>

        {/* Routes */}
        <Routes data={PROFILE_ROUTES} />
      </>
    </ScrollView>
  );
};

export default Profile;
