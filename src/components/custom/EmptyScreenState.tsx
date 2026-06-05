import React from "react";
import { Image, Text, View } from "react-native";

const EmptyScreenState = ({ title, image }: { title: string; image: any }) => {
  return (
    <View className="flex-1 items-center justify-center mt-[-20px]">
      <Image
        source={image}
        className="w-[60px] h-[60px] mb-[10px]"
        resizeMode="contain"
      />

      <Text className="font-[poppins-medium] text-[20px] text-[#1F1500]">
        Your {title} Is Empty
      </Text>

      <Text className="mt-[8px] text-center font-[poppins-regular] text-[14px] text-[#C2A26F]">
        Oops! Looks like you haven't {"\n"} added any items yet.
      </Text>
    </View>
  );
};

export default EmptyScreenState;
