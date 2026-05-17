import React from "react";
import { Image, ImageBackground } from "react-native";

const Splash = () => {
  return (
    <ImageBackground
      source={require("@/src/assets/images/custom/bg.jpeg")}
      className="flex-1 items-center justify-center"
      resizeMode="contain"
    >
      <Image
        source={require("@/src/assets/images/custom/logo.png")}
        className="w-[175px] h-[175px]"
        resizeMode="contain"
      />
    </ImageBackground>
  );
};

export default Splash;
