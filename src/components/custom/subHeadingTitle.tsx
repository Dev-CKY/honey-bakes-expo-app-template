import React from "react";
import { Text, View } from "react-native";

const SubHeadingTitle = ({ title }: { title: string }) => {
  return (
    <View>
      <Text className="text-[16px] text-[#1F1500] font-[poppins-regular]">
        {title}
      </Text>
    </View>
  );
};

export default SubHeadingTitle;
