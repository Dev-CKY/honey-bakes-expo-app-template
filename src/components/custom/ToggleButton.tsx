import React from "react";
import { Pressable, Text } from "react-native";

type ToggleButtonProps = {
  title: string;
  value: "ongoing" | "history";
  handleToggle: (tab: "ongoing" | "history") => void;
};

const ToggleButton = ({ title, value, handleToggle }: ToggleButtonProps) => {
  return (
    <Pressable
      onPress={() => handleToggle(value)}
      className="flex-1 items-center justify-center"
    >
      <Text className="font-[poppins-medium] text-[16px] text-[#2E261C]">
        {title}
      </Text>
    </Pressable>
  );
};

export default ToggleButton;
