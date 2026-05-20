import arrowRight from "@/src/assets/icons/svg/arrowRight";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { SvgXml } from "react-native-svg";

const Routes = ({ data = [] }: { data?: any[] }) => {
  return (
    <>
      {data.map((item: any, index: number) => (
        <View
          key={index}
          className="mt-[20px] px-[20px] border-b border-[#F6F0D4]"
        >
          <Pressable
            className="flex-row items-center justify-between mb-[20px]"
            onPress={item.onPress}
          >
            <View className="flex-row items-center gap-[15px]">
              <View className="h-[48px] w-[48px] rounded-full bg-[#F6F0D4] flex-row items-center justify-center">
                <SvgXml xml={item.icon} className="w-[24px] h-[24px]" />
              </View>

              <Text className="text-[16px] text-[#1F1500] font-[poppins-medium]">
                {item.routeName}
              </Text>
            </View>

            <SvgXml xml={arrowRight} className="w-[24px] h-[24px] rotate-180" />
          </Pressable>
        </View>
      ))}
    </>
  );
};

export default Routes;
