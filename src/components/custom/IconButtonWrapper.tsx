import React from "react";
import { Pressable } from "react-native";
import { SvgXml } from "react-native-svg";

const IconButtonWrapper = ({ icon, onPress }: any) => {
  return (
    <Pressable
      className="border border-[1px] w-[48px] h-[48px] items-center justify-center rounded-full mb-[20px]"
      onPress={onPress}
    >
      <SvgXml xml={icon} className="w-[24px] h-[24px]" />
    </Pressable>
  );
};

export default IconButtonWrapper;
