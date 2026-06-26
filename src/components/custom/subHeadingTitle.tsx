import React from "react";
import { Text, View } from "react-native";
import styles from "../../styles/components/subHeadingTitle.styles";

const SubHeadingTitle = ({ title }: { title: string }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default SubHeadingTitle;
