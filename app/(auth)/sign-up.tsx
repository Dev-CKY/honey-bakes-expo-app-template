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
import { SvgXml } from "react-native-svg";

const SignUp = () => {
  return (
    <ImageBackground
      source={require("@/src/assets/images/custom/bg.jpeg")}
      className="flex-1 p-[20px]"
      resizeMode="cover"
    >
      {/* Sign Up Screen Content */}

      <>
        {/* Heading */}
        <HeadingTitle title="Sign Up" />

        {/* Sub Heading */}
        <SubHeadingTitle title="to create a new account." />

        {/* Phone number */}
        <TextInputField
          placeholder="Phone number"
          leftIcon={<SvgXml xml={call} className="w-[24px] h-[24px]" />}
          keyboardType="number-pad"
        />

        {/* Email */}
        <TextInputField
          placeholder="Email address"
          leftIcon={<SvgXml xml={email} className="w-[24px] h-[24px]" />}
          keyboardType="email-address"
        />

        {/* Password */}
        <TextInputField
          placeholder="Password"
          isPassword
          leftIcon={<SvgXml xml={lock} className="w-[24px] h-[24px]" />}
          eyeOpenIcon={<SvgXml xml={eye} className="w-[24px] h-[24px]" />}
          eyeCloseIcon={<SvgXml xml={eyeOff} className="w-[24px] h-[24px]" />}
          keyboardType="default"
        />

        {/* Button */}
        <Button label="Sign Up" />

        {/* Have an account? */}
        <>
          <Text className="text-[#C2A26F] text-[14px] font-[poppins-regular] self-center">
            Have an account?{" "}
            <Link
              href="/(auth)/sign-in"
              className="text-[#1F1500] font-[poppins-medium]"
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
