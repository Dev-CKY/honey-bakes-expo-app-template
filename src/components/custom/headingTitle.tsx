import React from "react";
import { Text, View } from "react-native";
import styles from "../../styles/components/headingTitle.styles";

const HeadingTitle = ({ title, size }: { title: string; size: number }) => {
  return (
    <View>
      <Text style={[styles.title, { fontSize: size }]}>{title}</Text>
    </View>
  );
};

export default HeadingTitle;
