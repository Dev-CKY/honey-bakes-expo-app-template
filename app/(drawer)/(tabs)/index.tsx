import bell from "@/src/assets/icons/svg/bell";
import map from "@/src/assets/icons/svg/map";
import SearchBar from "@/src/components/custom/SearchBar";
import { router } from "expo-router";
import React from "react";
import { Image, ImageBackground, Pressable, Text, View } from "react-native";
import { SvgXml } from "react-native-svg";

const Home = () => {
  return (
    <ImageBackground
      className="w-full h-[300px] p-[20px] justify-between"
      source={require("@/src/assets/images/custom/home_bg.jpg")}
    >
      {/* Icons wrapper */}
      <View className="flex-row items-center justify-between">
        <Pressable>
          <Image
            source={require("@/src/assets/images/custom/icons/avatar.png")}
            className="w-[44px] h-[44px] rounded-full"
          />
        </Pressable>

        <Pressable
          onPress={() => router.push("/screens/notifications")}
          className="w-[44px] h-[44px] rounded-full bg-[#FFFFE3] border border-[1.5px] items-center justify-center"
        >
          <SvgXml xml={bell} />
        </Pressable>
      </View>

      {/* Name and location */}
      <View>
        <Text className="font-[kalnia-medium] text-[#1F1500] text-[32px]">
          Hello, Michel
        </Text>

        <View className="flex-row items-center gap-[5px]">
          <SvgXml xml={map} />
          <Text className="font-[poppins-regular] text-[16px] text-[#1F1500]">
            New York, NY, USA
          </Text>
        </View>
      </View>

      <Pressable onPress={() => router.push("/screens/search")}>
        <View pointerEvents="none">
          <SearchBar placeholder="Search what you wanna eat" />
        </View>
      </Pressable>
    </ImageBackground>
  );
};

export default Home;
