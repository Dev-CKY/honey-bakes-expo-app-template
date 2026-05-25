import React from "react";
import { Pressable, Text } from "react-native";

const CancelButton = () => {
  return (
    <Pressable className="w-full h-[60px] rounded-full items-center justify-center bg-[#F7715D]">
      <Text className="font-[poppins-medium] text-[16px] text-[#fff]">
        Cancel Order
      </Text>
    </Pressable>
  );
};

export default CancelButton;
