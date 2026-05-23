import { Stack } from "expo-router";

export default function GlobalScreensLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="wishlist" />
      <Stack.Screen name="notifications" />
    </Stack>
  );
}
