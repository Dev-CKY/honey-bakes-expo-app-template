import { Tabs } from "expo-router";

import { CustomTabBar } from "@/src/components/custom/navigation/CustomTabBar";

export const unstable_settings = {
  initialRouteName: "index",
};

export default function TabLayout() {
  return (
    <Tabs
      initialRouteName="index"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
      tabBar={(props) => <CustomTabBar {...props} />}
    />
  );
}
