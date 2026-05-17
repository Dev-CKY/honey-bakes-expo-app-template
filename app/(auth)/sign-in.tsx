import HeadingTitle from "@/src/components/custom/headingTitle";
import SubHeadingTitle from "@/src/components/custom/subHeadingTitle";
import React from "react";
import { ImageBackground } from "react-native";

const SignIn = () => {
  return (
    <ImageBackground
      source={require("@/src/assets/images/custom/bg.jpeg")}
      className="flex-1 p-[20px]"
      resizeMode="cover"
    >
      {/* Sign In Screen Content */}
      <HeadingTitle title="Sign In" />
      <SubHeadingTitle title="to access your account." />
    </ImageBackground>
  );
};

export default SignIn;
