import React from "react";
import { Pressable } from "react-native";
import { SvgXml } from "react-native-svg";
import styles from "../../styles/components/iconButtonWrapper.styles";

const IconButtonWrapper = ({ icon, onPress }: any) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <SvgXml xml={icon} width={24} height={24} />
    </Pressable>
  );
};

export default IconButtonWrapper;
