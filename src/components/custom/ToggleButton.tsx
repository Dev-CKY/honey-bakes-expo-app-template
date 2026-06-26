import React from "react";
import { Pressable, Text } from "react-native";
import styles from "../../styles/components/toggleButton.styles";

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
    <Pressable onPress={() => handleToggle(value)} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

export default ToggleButton;
