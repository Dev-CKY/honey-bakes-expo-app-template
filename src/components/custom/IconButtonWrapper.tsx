import React from "react";
import { Pressable } from "react-native";
import { scale } from "react-native-size-matters";
import { SvgXml } from "react-native-svg";

const IconButtonWrapper = ({ icon, onPress }: any) => {
  return (
    <Pressable
      className="border items-center justify-center rounded-full"
      onPress={onPress}
      style={{
        width: scale(48),
        height: scale(48),
        borderWidth: scale(1),
        marginBottom: scale(20),
      }}
    >
      <SvgXml xml={icon} width={scale(24)} height={scale(24)} />
    </Pressable>
  );
};

export default IconButtonWrapper;
