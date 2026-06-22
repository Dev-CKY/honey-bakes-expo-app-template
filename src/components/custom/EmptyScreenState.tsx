import React from "react";
import { Image, Text, View } from "react-native";
import { scale } from "react-native-size-matters";

const EmptyScreenState = ({ title, image }: { title: string; image: any }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Image
        source={image}
        style={{ width: scale(60), height: scale(60), marginBottom: scale(10) }}
        resizeMode="contain"
      />

      <Text
        style={{ fontSize: scale(20) }}
        className="font-[poppins-medium] text-[#1F1500]"
      >
        Your {title} Is Empty
      </Text>

      <Text
        style={{
          marginTop: scale(8),
          textAlign: "center",
          fontSize: scale(14),
        }}
        className="font-[poppins-regular] text-[#C2A26F]"
      >
        Oops! Looks like you haven&apos;t {"\n"} added any items yet.
      </Text>
    </View>
  );
};

export default EmptyScreenState;
