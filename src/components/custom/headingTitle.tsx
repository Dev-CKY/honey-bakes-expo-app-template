import React from "react";
import { Text, View } from "react-native";

const HeadingTitle = ({ title, size }: { title: string; size: number }) => {
  return (
    <View>
      <Text
        style={{ fontSize: size }}
        className="text-[#1F1500] font-[kalnia-medium]"
      >
        {title}
      </Text>
    </View>
  );
};

export default HeadingTitle;
