import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "../../styles/components/button.styles";

const Button = ({ label, onPress }: { label: string; onPress: () => void }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
