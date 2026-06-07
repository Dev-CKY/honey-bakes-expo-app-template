import React from "react";
import { Image, ImageBackground } from "react-native";
import * as Animatable from "react-native-animatable";

const Splash = () => {
  return (
    <ImageBackground
      source={require("@/src/assets/images/custom/bg.jpeg")}
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
      resizeMode="cover"
    >
      <Animatable.View animation="slideInLeft" duration={1500} useNativeDriver>
        <Image
          source={require("@/src/assets/images/custom/logo.png")}
          style={{
            width: 175,
            height: 175,
          }}
          resizeMode="contain"
        />
      </Animatable.View>
    </ImageBackground>
  );
};

export default Splash;
