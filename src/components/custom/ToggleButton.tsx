import React from "react";
import { Pressable, Text } from "react-native";

type ToggleButtonProps<T extends string> = {
  title: string;
  value: T;
  handleToggle: (tab: T) => void;
};

const ToggleButton = <T extends string>({
  title,
  value,
  handleToggle,
}: ToggleButtonProps<T>) => {
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
