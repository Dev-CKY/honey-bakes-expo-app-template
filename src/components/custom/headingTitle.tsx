import React from "react";
import { Text, View } from "react-native";

const HeadingTitle = ({ title }: { title: string }) => {
  return (
    <View>
      <Text className="text-[32px] text-[#1F1500] font-[kalnia-medium]">
        {title}
      </Text>
    </View>
  );
};

export default HeadingTitle;
