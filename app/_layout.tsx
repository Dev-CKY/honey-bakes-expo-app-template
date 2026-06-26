import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import { useFonts } from "expo-font";

import "react-native-reanimated";
import Toast from "react-native-toast-message";

import { styles } from "@/src/styles/layouts/app.layout.styles";
import Splash from "./splash";

const STATUS_BAR_BG = "#ffffe3";

const RootLayout = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [isLoggedIn] = useState(true);

  const [loaded] = useFonts({
    "poppins-regular": require("@/src/assets/fonts/Poppins-Regular.ttf"),
    "poppins-medium": require("@/src/assets/fonts/Poppins-Medium.ttf"),
    "kalnia-medium": require("@/src/assets/fonts/Kalnia-Medium.ttf"),
    "kalnia-bold": require("@/src/assets/fonts/Kalnia-Bold.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      const timer = setTimeout(() => setShowSplash(false), 2500);

      return () => clearTimeout(timer);
    }
  }, [loaded]);

  if (!loaded || showSplash) {
    return <Splash />;
  }

  return (
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaProvider>
        <StatusBar translucent backgroundColor={STATUS_BAR_BG} style="dark" />

        <SafeAreaView style={{ flex: 1 }} edges={["top", "left", "right"]}>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Protected guard={!isLoggedIn}>
              <Stack.Screen name="(auth)" />
            </Stack.Protected>
            <Stack.Protected guard={isLoggedIn}>
              <Stack.Screen name="(drawer)" />
            </Stack.Protected>
          </Stack>

          <Toast />
        </SafeAreaView>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default RootLayout;
