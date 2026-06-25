import arrowLeft from "@/src/assets/icons/svg/arrowLeft";
import call from "@/src/assets/icons/svg/call";
import map from "@/src/assets/icons/svg/map";
import user from "@/src/assets/icons/svg/user";
import Button from "@/src/components/custom/Button";
import HeadingTitle from "@/src/components/custom/HeadingTitle";
import IconButtonWrapper from "@/src/components/custom/IconButtonWrapper";
import SubHeadingTitle from "@/src/components/custom/SubHeadingTitle";
import TextInputField from "@/src/components/custom/TextInputField";
import styles from "@/src/styles/screens/addAddress.styles";
import { router } from "expo-router";
import React from "react";
import { ImageBackground } from "react-native";
import { scale } from "react-native-size-matters";
import { SvgXml } from "react-native-svg";

const AddAddress = () => {
  return (
    <ImageBackground
      source={require("@/src/assets/images/custom/bg.jpeg")}
      resizeMode="cover"
      style={styles.container}
    >
      <IconButtonWrapper icon={arrowLeft} onPress={() => router.back()} />

      <HeadingTitle size={32} title="Add new address" />

      <SubHeadingTitle title="to add a new address." />

      <TextInputField
        placeholder="Phone number"
        keyboardType="number-pad"
        leftIcon={<SvgXml xml={call} width={scale(24)} height={scale(24)} />}
      />

      <TextInputField
        placeholder="Name"
        keyboardType="default"
        leftIcon={<SvgXml xml={user} width={scale(24)} height={scale(24)} />}
      />

      <TextInputField
        placeholder="Address"
        keyboardType="default"
        leftIcon={<SvgXml xml={map} width={scale(24)} height={scale(24)} />}
      />

      <Button
        label="Add address"
        onPress={() => {
          router.replace("/screens/addresses");
        }}
      />
    </ImageBackground>
  );
};

export default AddAddress;
