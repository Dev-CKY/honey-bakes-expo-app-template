import React from "react";
import { Image, Text, View } from "react-native";
import styles from "../../styles/components/emptyScreenState.styles";

const EmptyScreenState = ({ title, image }: { title: string; image: any }) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} resizeMode="contain" />

      <Text style={styles.title}>Your {title} Is Empty</Text>

      <Text style={styles.message}>
        Oops! Looks like you haven&apos;t {"\n"} added any items yet.
      </Text>
    </View>
  );
};

export default EmptyScreenState;
