import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { scale } from "react-native-size-matters";

const Button = ({ label, onPress }: { label: string; onPress: () => void }) => {
  return (
    <TouchableOpacity
      className="bg-[#F7BC5D] rounded-full items-center justify-center border border-[#1F1500]"
      style={{
        height: scale(60),
        marginBottom: scale(20),
        borderWidth: scale(1.5),
      }}
      onPress={onPress}
    >
      <Text
        className="text-[#1F1500] font-[poppins-medium]"
        style={{ fontSize: scale(16) }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
