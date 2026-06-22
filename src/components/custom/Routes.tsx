import arrowRight from "@/src/assets/icons/svg/arrowRight";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { scale } from "react-native-size-matters";
import { SvgXml } from "react-native-svg";

const Routes = ({ data = [] }: { data?: any[] }) => {
  return (
    <>
      {data.map((item: any, index: number) => (
        <View
          key={index}
          className="border-b border-[#F6F0D4]"
          style={{ marginTop: scale(20), paddingHorizontal: scale(20) }}
        >
          <Pressable
            className="flex-row items-center justify-between"
            onPress={item.onPress}
            style={{ marginBottom: scale(20) }}
          >
            <View className="flex-row items-center" style={{ gap: scale(15) }}>
              <View
                className="bg-[#F6F0D4] flex-row items-center justify-center"
                style={{
                  height: scale(48),
                  width: scale(48),
                  borderRadius: scale(48) / 2,
                }}
              >
                <SvgXml xml={item.icon} width={scale(24)} height={scale(24)} />
              </View>

              <Text
                style={{ fontSize: scale(16) }}
                className="text-[#1F1500] font-[poppins-medium]"
              >
                {item.routeName}
              </Text>
            </View>

            <SvgXml xml={arrowRight} width={scale(24)} height={scale(24)} />
          </Pressable>
        </View>
      ))}
    </>
  );
};

export default Routes;
