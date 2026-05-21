import React from "react";
import { Image, ImageBackground } from "react-native";
import * as Animatable from "react-native-animatable";

const Splash = () => {
  return (
    <ImageBackground
      source={require("@/src/assets/images/custom/bg.jpeg")}
      className="flex-1 items-center justify-center"
      resizeMode="cover"
    >
      <Animatable.View
        animation="slideInLeft"
        duration={1500}
        easing="ease-out"
      >
        <Image
          source={require("@/src/assets/images/custom/logo.png")}
          className="w-[175px] h-[175px]"
          resizeMode="contain"
        />
      </Animatable.View>
    </ImageBackground>
  );
};

export default Splash;
