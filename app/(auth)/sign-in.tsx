import email from "@/src/assets/icons/svg/email";
import eye from "@/src/assets/icons/svg/eye";
import eyeOff from "@/src/assets/icons/svg/eyeOff";
import lock from "@/src/assets/icons/svg/lock";
import Button from "@/src/components/custom/Button";
import HeadingTitle from "@/src/components/custom/HeadingTitle";
import SubHeadingTitle from "@/src/components/custom/SubHeadingTitle";
import TextInputField from "@/src/components/custom/TextInputField";
import React from "react";
import { ImageBackground, Text, TouchableOpacity } from "react-native";
import { SvgXml } from "react-native-svg";

const SignIn = () => {
  return (
    <ImageBackground
      source={require("@/src/assets/images/custom/bg.jpeg")}
      className="flex-1 p-[20px]"
      resizeMode="cover"
    >
      {/* Sign In Screen Content */}

      <>
        {/* Heading */}
        <HeadingTitle title="Sign In" />

        {/* Sub Heading */}
        <SubHeadingTitle title="to access your account." />

        {/* Email */}
        <TextInputField
          placeholder="Email address"
          leftIcon={<SvgXml xml={email} className="w-[24px] h-[24px]" />}
        />

        {/* Password */}
        <TextInputField
          placeholder="Password"
          isPassword
          leftIcon={<SvgXml xml={lock} className="w-[24px] h-[24px]" />}
          eyeOpenIcon={<SvgXml xml={eye} className="w-[24px] h-[24px]" />}
          eyeCloseIcon={<SvgXml xml={eyeOff} className="w-[24px] h-[24px]" />}
        />

        {/* Forgot Password */}
        <TouchableOpacity className="self-end mb-[20px]">
          <Text className="text-[#1F1500] text-[14px] font-[poppins-medium]">
            Forgot Password?
          </Text>
        </TouchableOpacity>

        {/* Button */}
        <Button label="Sign In" />

        {/* Don't have an account? */}
        <TouchableOpacity>
          <Text className="text-[#C2A26F] text-[14px] font-[poppins-regular] self-center">
            Don't have an account?{" "}
            <Text className="text-[#1F1500] font-[poppins-medium]">
              Sign Up
            </Text>
          </Text>
        </TouchableOpacity>
      </>
    </ImageBackground>
  );
};

export default SignIn;
