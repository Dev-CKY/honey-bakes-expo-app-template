import React from "react";
import { Text, View } from "react-native";

const HeadingTitle = ({ title }: { title: string }) => {
  return (
    <View>
      <Text className="text-[36px] font-kalniaMedium text-[#1F1500]">
        {title}
      </Text>
    </View>
  );
};

export default HeadingTitle;
