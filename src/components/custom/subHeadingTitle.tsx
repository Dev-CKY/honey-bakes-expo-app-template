import React from "react";
import { Text, View } from "react-native";
import { scale } from "react-native-size-matters";

const SubHeadingTitle = ({ title }: { title: string }) => {
  return (
    <View>
      <Text
        className="text-[#1F1500] font-[poppins-regular]"
        style={{ fontSize: scale(16), marginBottom: scale(20) }}
      >
        {title}
      </Text>
    </View>
  );
};

export default SubHeadingTitle;
