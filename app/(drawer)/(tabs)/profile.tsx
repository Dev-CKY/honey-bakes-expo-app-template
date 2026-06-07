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
      className="flex-1 bg-[#FFFFE3] py-[20px]"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingBottom: scale(120),
      }}
    >
      <>
        <View className="px-[20px]">
          {/* Back button */}
          <IconButtonWrapper icon={arrowLeft} onPress={() => router.back()} />

          {/* Heading */}
          <HeadingTitle size={32} title="My Profile" />
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

        {/* Others section */}
        <Text className="text-[20px] p-[20px] text-[#1F1500] font-[kalnia-medium] mt-[5px]">
          Others
        </Text>

        <View className="flex-row items-center justify-between px-[20px]">
          {/* Account and add account icon */}
          <View className="flex-row items-center gap-[20px]">
            <View className="items-center">
              <Image
                source={require("@/src/assets/images/custom/profile.jpg")}
                className="h-[54px] w-[54px] rounded-full"
              />
              <Text className="text-[14px]  text-[#1F1500] font-[poppins-regular] mt-[2px]">
                You
              </Text>
            </View>

            <Pressable className="items-center">
              <View className="h-[54px] w-[54px] rounded-full bg-[#F6F0D4] items-center justify-center">
                <SvgXml xml={plus} />
              </View>
              <Text className="text-[14px]  text-[#1F1500] font-[poppins-regular] mt-[2px]">
                Add
              </Text>
            </Pressable>
          </View>

          {/* Logout */}
          <Pressable className="items-center">
            <View className="h-[54px] w-[54px] rounded-full bg-[#F7BC5D] border border-[1.5px] border-[#1F1500] items-center justify-center">
              <SvgXml xml={logout2} />
            </View>
            <Text className="text-[14px]  text-[#1F1500] font-[poppins-regular] mt-[2px]">
              Logout
            </Text>
          </Pressable>
        </View>
      </>
    </ScrollView>
  );
};

export default Profile;
