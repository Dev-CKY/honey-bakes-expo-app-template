import arrowRight from "@/src/assets/icons/svg/arrowRight";
import PROFILE_ROUTES from "@/src/data/profile-routes.data";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { SvgXml } from "react-native-svg";

const ProfileRoutes = () => {
  return (
    <>
      {PROFILE_ROUTES.map((item: any, index: number) => (
        <View
          key={index}
          className="mt-[20px] px-[20px] border-b border-[#F6F0D4]"
        >
          <Pressable
            className="flex-row items-center justify-between mb-[20px]"
            onPress={item.onPress}
          >
            {/* Route wrapper */}
            <View className="flex-row items-center gap-[15px]">
              {/* Icon wrapper */}
              <View className="h-[48px] w-[48px] rounded-full bg-[#F6F0D4] flex-row items-center justify-center">
                <SvgXml xml={item.icon} className="w-[24px] h-[24px]" />
              </View>

              {/* Route name */}
              <Text className="text-[16px] text-[#1F1500] font-[poppins-medium]">
                {item.routeName}
              </Text>
            </View>

            {/* Arrow right icon */}
            <SvgXml xml={arrowRight} className="w-[24px] h-[24px] rotate-180" />
          </Pressable>
        </View>
      ))}
    </>
  );
};

export default ProfileRoutes;
