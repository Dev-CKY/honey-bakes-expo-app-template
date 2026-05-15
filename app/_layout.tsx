import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import "react-native-reanimated";
import Toast from "react-native-toast-message";

import SplashScreen from "@/app/splash";
import { SafeAreaView } from "react-native-safe-area-context";

import "@/global.css";

export const unstable_settings = {
  anchor: "(drawer)",
};

export default function RootLayout() {
  const isLoggedIn = true; // Replace with auth state

  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <GestureHandlerRootView>
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
