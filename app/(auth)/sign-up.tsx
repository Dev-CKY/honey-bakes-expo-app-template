import call from "@/src/assets/icons/svg/call";
import email from "@/src/assets/icons/svg/email";
import eye from "@/src/assets/icons/svg/eye";
import eyeOff from "@/src/assets/icons/svg/eyeOff";
import lock from "@/src/assets/icons/svg/lock";
import Button from "@/src/components/custom/Button";
import HeadingTitle from "@/src/components/custom/HeadingTitle";
import SubHeadingTitle from "@/src/components/custom/SubHeadingTitle";
import TextInputField from "@/src/components/custom/TextInputField";
import { Link } from "expo-router";
import React from "react";
import { ImageBackground, Text } from "react-native";
import { scale } from "react-native-size-matters";
import { SvgXml } from "react-native-svg";

const SignUp = () => {
  return (
    <ImageBackground
      source={require("@/src/assets/images/custom/bg.jpeg")}
      className="flex-1"
      style={{ padding: scale(20) }}
      resizeMode="cover"
    >
      {/* Sign Up Screen Content */}

      <>
        {/* Heading */}
        <HeadingTitle size={32} title="Sign Up" />

        {/* Sub Heading */}
        <SubHeadingTitle title="to create a new account." />

        {/* Phone number */}
        <TextInputField
          placeholder="Phone number"
          leftIcon={<SvgXml xml={call} width={scale(24)} height={scale(24)} />}
          keyboardType="number-pad"
        />

        {/* Email */}
        <TextInputField
          placeholder="Email address"
          leftIcon={<SvgXml xml={email} width={scale(24)} height={scale(24)} />}
          keyboardType="email-address"
        />

        {/* Password */}
        <TextInputField
          placeholder="Password"
          isEncrypted
          leftIcon={<SvgXml xml={lock} width={scale(24)} height={scale(24)} />}
          eyeOpenIcon={
            <SvgXml xml={eye} width={scale(24)} height={scale(24)} />
          }
          eyeCloseIcon={
            <SvgXml xml={eyeOff} width={scale(24)} height={scale(24)} />
          }
          keyboardType="default"
        />

        {/* Button */}
        <Button onPress={() => {}} label="Sign Up" />

        {/* Have an account? */}
        <>
          <Text
            className="text-[#C2A26F] font-[poppins-regular] self-center"
            style={{ fontSize: scale(14) }}
          >
            Have an account?{" "}
            <Link
              href="/(auth)/sign-in"
              className="text-[#1F1500] font-[poppins-medium]"
              style={{ fontSize: scale(14) }}
            >
              Sign In
            </Link>
          </Text>
        </>
      </>
    </ImageBackground>
  );
};

export default SignUp;
