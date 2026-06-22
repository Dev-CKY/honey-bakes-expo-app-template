import arrowLeft from "@/src/assets/icons/svg/arrowLeft";
import Button from "@/src/components/custom/Button";
import HeadingTitle from "@/src/components/custom/HeadingTitle";
import IconButtonWrapper from "@/src/components/custom/IconButtonWrapper";
import OtpInputField from "@/src/components/custom/OtpInputField";
import OtpTimer from "@/src/components/custom/OtpTimer";
import SubHeadingTitle from "@/src/components/custom/SubHeadingTitle";
import { router } from "expo-router";
import React from "react";
import { ImageBackground } from "react-native";
import { scale } from "react-native-size-matters";

const OtpVerification = () => {
  return (
    <ImageBackground
      source={require("@/src/assets/images/custom/bg.jpeg")}
      className="flex-1"
      style={{ padding: scale(20) }}
      resizeMode="cover"
    >
      {/* Otp Verification Screen Content */}

      <>
        {/* Back Button */}
        <IconButtonWrapper icon={arrowLeft} onPress={() => router.back()} />

        {/* Heading */}
        <HeadingTitle size={32} title="Otp Verification" />

        {/* Sub Heading */}
        <SubHeadingTitle title="Enter OTP that we’ve sent on your email." />

        {/* OTP Input */}
        <OtpInputField />

        {/* OTP Timer */}
        <OtpTimer />

        {/* Button */}
        <Button
          label="Verify OTP"
          onPress={() => router.push("/(auth)/reset-password")}
        />
      </>
    </ImageBackground>
  );
};

export default OtpVerification;
