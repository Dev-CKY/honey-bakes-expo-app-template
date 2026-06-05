import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import "react-native-reanimated";
import Toast from "react-native-toast-message";

import { CartProvider } from "@/src/context/CartContext";

import "../global.css";

// Keep splash visible immediately
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [appReady, setAppReady] = useState(false);

  const [loaded, error] = useFonts({
    "poppins-regular": require("@/src/assets/fonts/Poppins-Regular.ttf"),
    "poppins-medium": require("@/src/assets/fonts/Poppins-Medium.ttf"),
    "kalnia-medium": require("@/src/assets/fonts/Kalnia-Medium.ttf"),
    "kalnia-bold": require("@/src/assets/fonts/Kalnia-Bold.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      if (loaded || error) {
        await SplashScreen.hideAsync();
        setAppReady(true);
      }
    }

    prepare();
  }, [loaded, error]);

  if (!loaded && !error) {
    return null; // still keep splash
  }

  if (!appReady) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: "#ffffe3" }}>
      <SafeAreaProvider>
        <CartProvider>
          <StatusBar translucent backgroundColor="#ffffe3" style="dark" />

          <SafeAreaView style={{ flex: 1 }} edges={["top", "left", "right"]}>
            <Stack screenOptions={{ headerShown: false }}>
              <Stack.Screen name="index" />
              <Stack.Screen name="splash" />
              <Stack.Screen name="(auth)" />
              <Stack.Screen name="(drawer)" />
            </Stack>

            <Toast />
          </SafeAreaView>
        </CartProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
