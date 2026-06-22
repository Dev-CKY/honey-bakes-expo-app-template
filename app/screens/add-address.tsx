import arrowLeft from "@/src/assets/icons/svg/arrowLeft";
import call from "@/src/assets/icons/svg/call";
import map from "@/src/assets/icons/svg/map";
import user from "@/src/assets/icons/svg/user";
import Button from "@/src/components/custom/Button";
import HeadingTitle from "@/src/components/custom/HeadingTitle";
import IconButtonWrapper from "@/src/components/custom/IconButtonWrapper";
import SubHeadingTitle from "@/src/components/custom/SubHeadingTitle";
import TextInputField from "@/src/components/custom/TextInputField";
import { router } from "expo-router";
import React from "react";
import { ImageBackground } from "react-native";
import { scale } from "react-native-size-matters";
import { SvgXml } from "react-native-svg";

const AddAddress = () => {
  return (
    <ImageBackground
      source={require("@/src/assets/images/custom/bg.jpeg")}
      className="flex-1"
      resizeMode="cover"
      style={{ padding: scale(20) }}
    >
      {/* Address Screen Content */}

      <>
        {/* Back Button */}
        <IconButtonWrapper icon={arrowLeft} onPress={() => router.back()} />
        {/* Heading */}
        <HeadingTitle size={32} title="Add new address" />
        {/* Sub Heading */}
        <SubHeadingTitle title="to add a new address." />
        {/* Phone number */}
        <TextInputField
          placeholder="Phone number"
          leftIcon={<SvgXml xml={call} width={scale(24)} height={scale(24)} />}
          keyboardType="number-pad"
        />
        {/* Name */}
        <TextInputField
          placeholder="Name"
          leftIcon={<SvgXml xml={user} width={scale(24)} height={scale(24)} />}
          keyboardType="default"
        />
        {/* Address */}
        <TextInputField
          placeholder="Address"
          leftIcon={<SvgXml xml={map} width={scale(24)} height={scale(24)} />}
          keyboardType="default"
        />
        {/* Button */}
        <Button
          onPress={() => {
            router.replace("/screens/addresses");
          }}
          label="Add address"
        />
      </>
    </ImageBackground>
  );
};

export default AddAddress;
