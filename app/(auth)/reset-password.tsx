import arrowLeft from "@/src/assets/icons/svg/arrowLeft";
import eye from "@/src/assets/icons/svg/eye";
import eyeOff from "@/src/assets/icons/svg/eyeOff";
import lock from "@/src/assets/icons/svg/lock";
import Button from "@/src/components/custom/Button";
import HeadingTitle from "@/src/components/custom/HeadingTitle";
import IconButtonWrapper from "@/src/components/custom/IconButtonWrapper";
import SubHeadingTitle from "@/src/components/custom/SubHeadingTitle";
import TextInputField from "@/src/components/custom/TextInputField";
import { router } from "expo-router";
import React from "react";
import { ImageBackground, View } from "react-native";
import { SvgXml } from "react-native-svg";

const ResetPassword = () => {
  return (
    <ImageBackground
      source={require("@/src/assets/images/custom/bg.jpeg")}
      className="flex-1 p-[20px]"
      resizeMode="cover"
    >
      {/* Reset Password Screen Content */}

      <>
        {/* Back Button */}
        <IconButtonWrapper icon={arrowLeft} onPress={() => router.back()} />

        {/* Heading */}
        <HeadingTitle title="Reset Password" />

        {/* Sub Heading */}
        <SubHeadingTitle title="Enter the new password" />

        {/* Password */}
        <TextInputField
          keyboardType="default"
          placeholder="New Password"
          isPassword
          leftIcon={<SvgXml xml={lock} className="w-[24px] h-[24px]" />}
          eyeOpenIcon={<SvgXml xml={eye} className="w-[24px] h-[24px]" />}
          eyeCloseIcon={<SvgXml xml={eyeOff} className="w-[24px] h-[24px]" />}
        />

        {/* Confirm Password */}
        <TextInputField
          keyboardType="default"
          placeholder="Confirm New Password"
          isPassword
          leftIcon={<SvgXml xml={lock} className="w-[24px] h-[24px]" />}
          eyeOpenIcon={<SvgXml xml={eye} className="w-[24px] h-[24px]" />}
          eyeCloseIcon={<SvgXml xml={eyeOff} className="w-[24px] h-[24px]" />}
        />

        <View className="mt-[20px]">
          {/* Button */}
          <Button label="Reset Password" onPress={() => {}} />
        </View>
      </>
    </ImageBackground>
  );
};

export default ResetPassword;
