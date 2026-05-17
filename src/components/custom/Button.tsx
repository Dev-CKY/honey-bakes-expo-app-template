import React from "react";
import { Text, TouchableOpacity } from "react-native";

const Button = ({ label }: { label: string }) => {
  return (
    <TouchableOpacity className="bg-[#F7BC5D] h-[60px] rounded-full items-center justify-center mb-[20px] border border-[#1F1500] border-[1.5px]">
      <Text className="text-[#1F1500] text-[16px] font-[poppins-medium]">
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
