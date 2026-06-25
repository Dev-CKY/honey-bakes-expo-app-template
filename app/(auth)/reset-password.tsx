import arrowLeft from "@/src/assets/icons/svg/arrowLeft";
import eye from "@/src/assets/icons/svg/eye";
import eyeOff from "@/src/assets/icons/svg/eyeOff";
import lock from "@/src/assets/icons/svg/lock";
import Button from "@/src/components/custom/Button";
import HeadingTitle from "@/src/components/custom/HeadingTitle";
import IconButtonWrapper from "@/src/components/custom/IconButtonWrapper";
import SubHeadingTitle from "@/src/components/custom/SubHeadingTitle";
import TextInputField from "@/src/components/custom/TextInputField";
import styles from "@/src/styles/screens/resetPassword.styles";
import { router } from "expo-router";
import React from "react";
import { ImageBackground, View } from "react-native";
import { scale } from "react-native-size-matters";
import { SvgXml } from "react-native-svg";

const ResetPassword = () => {
  return (
    <ImageBackground
      source={require("@/src/assets/images/custom/bg.jpeg")}
      style={styles.container}
      resizeMode="cover"
    >
      {/* Back Button */}
      <IconButtonWrapper icon={arrowLeft} onPress={() => router.back()} />

      {/* Heading */}
      <HeadingTitle size={32} title="Reset Password" />

      {/* Sub Heading */}
      <SubHeadingTitle title="Enter the new password" />

      {/* Password */}
      <TextInputField
        keyboardType="default"
        placeholder="New Password"
        isEncrypted
        leftIcon={<SvgXml xml={lock} width={scale(24)} height={scale(24)} />}
        eyeOpenIcon={<SvgXml xml={eye} width={scale(24)} height={scale(24)} />}
        eyeCloseIcon={
          <SvgXml xml={eyeOff} width={scale(24)} height={scale(24)} />
        }
      />

      {/* Confirm Password */}
      <TextInputField
        keyboardType="default"
        placeholder="Confirm New Password"
        isEncrypted
        leftIcon={<SvgXml xml={lock} width={scale(24)} height={scale(24)} />}
        eyeOpenIcon={<SvgXml xml={eye} width={scale(24)} height={scale(24)} />}
        eyeCloseIcon={
          <SvgXml xml={eyeOff} width={scale(24)} height={scale(24)} />
        }
      />

      <View style={styles.buttonContainer}>
        <Button label="Reset Password" onPress={() => {}} />
      </View>
    </ImageBackground>
  );
};

export default ResetPassword;
