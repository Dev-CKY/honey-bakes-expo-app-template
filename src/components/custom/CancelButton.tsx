import React from "react";
import { Pressable, Text } from "react-native";
import { scale } from "react-native-size-matters";

const CancelButton = () => {
  return (
    <Pressable
      style={{ height: scale(60) }}
      className="w-full rounded-full items-center justify-center bg-[#F7715D]"
    >
      <Text
        className="font-[poppins-medium] text-[#fff]"
        style={{ fontSize: scale(16) }}
      >
        Cancel Order
      </Text>
    </Pressable>
  );
};

export default CancelButton;
