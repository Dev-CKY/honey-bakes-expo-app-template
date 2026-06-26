import React from "react";
import { Pressable, Text } from "react-native";
import styles from "../../styles/components/cancelButton.styles";

const CancelButton = () => {
  return (
    <Pressable style={styles.container}>
      <Text style={styles.label}>Cancel Order</Text>
    </Pressable>
  );
};

export default CancelButton;
