import { router } from "expo-router";
import React, { useEffect } from "react";
import { Image, ImageBackground } from "react-native";
import * as Animatable from "react-native-animatable";

const Splash = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      const isLoggedIn = true;

      if (isLoggedIn) {
        router.replace("/(drawer)/(tabs)");
      } else {
        router.replace("/(auth)/sign-in");
      }
    }, 2500);

    return () => clearTimeout(timeout);
  }, []);

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
