import { router } from "expo-router";
import React, { useEffect } from "react";
import { Image, ImageBackground } from "react-native";
import * as Animatable from "react-native-animatable";

const Splash = () => {
  const isLoggedIn = false; // Replace with actual auth state

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isLoggedIn) {
        router.replace("/(drawer)/(tabs)");
      } else {
        router.replace("/(auth)/sign-in");
      }
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

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
