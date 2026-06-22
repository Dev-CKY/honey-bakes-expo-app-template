import React from "react";
import { Pressable, Text } from "react-native";
import { scale } from "react-native-size-matters";

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
      <Text
        className="font-[poppins-medium] text-[#2E261C]"
        style={{ fontSize: scale(16) }}
      >
        {title}
      </Text>
    </Pressable>
  );
};

export default ToggleButton;
