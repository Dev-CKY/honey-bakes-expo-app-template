import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import "react-native-reanimated";
import Toast from "react-native-toast-message";

import "../global.css";

export const unstable_settings = {
  anchor: "(drawer)",
};

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const isLoggedIn = false;

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
      }
    }

    prepare();
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Protected guard={!isLoggedIn}>
            <Stack.Screen name="(auth)" />
          </Stack.Protected>

          <Stack.Protected guard={isLoggedIn}>
            <Stack.Screen name="(drawer)" />
          </Stack.Protected>
        </Stack>

        <Toast />

        <StatusBar style="dark" />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}
