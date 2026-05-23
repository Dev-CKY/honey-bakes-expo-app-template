import arrowLeft from "@/src/assets/icons/svg/arrowLeft";
import email from "@/src/assets/icons/svg/email";
import Button from "@/src/components/custom/Button";
import HeadingTitle from "@/src/components/custom/HeadingTitle";
import IconButtonWrapper from "@/src/components/custom/IconButtonWrapper";
import SubHeadingTitle from "@/src/components/custom/SubHeadingTitle";
import TextInputField from "@/src/components/custom/TextInputField";
import { Link, router } from "expo-router";
import React from "react";
import { ImageBackground, Text } from "react-native";
import { SvgXml } from "react-native-svg";

const ForgotPassword = () => {
  return (
    <ImageBackground
      source={require("@/src/assets/images/custom/bg.jpeg")}
      className="flex-1 p-[20px]"
      resizeMode="cover"
    >
      {/* Forgot Password Screen Content */}

      <>
        {/* Back Button */}
        <IconButtonWrapper icon={arrowLeft} onPress={() => router.back()} />

        {/* Heading */}
        <HeadingTitle title="Forgot Password?" />

        {/* Sub Heading */}
        <SubHeadingTitle title="Reset your password via your email." />

        {/* Email */}
        <TextInputField
          keyboardType="email-address"
          placeholder="Email address"
          leftIcon={<SvgXml xml={email} className="w-[24px] h-[24px]" />}
        />

        {/* Remember Password */}
        <Link href="/(auth)/sign-in" className="self-end mb-[20px]">
          <Text className="text-[#1F1500] text-[14px] font-[poppins-medium]">
            Remember Password?
          </Text>
        </Link>

        {/* Button */}
        <Button
          label="Send Reset Link"
          onPress={() => router.push("/(auth)/otp-verification")}
        />
      </>
    </ImageBackground>
  );
};

export default ForgotPassword;
