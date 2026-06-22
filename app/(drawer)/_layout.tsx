import CustomDrawerContent from "@/src/components/custom/navigation/CustomDrawer";
import { Drawer } from "expo-router/drawer";
import { scale } from "react-native-size-matters";

const DrawerLayout = () => {
  return (
    <Drawer
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerType: "slide",
        overlayColor: "rgba(0,0,0,0.25)",
        drawerStyle: {
          width: scale(300),
          backgroundColor: "#FFFFE3",
        },
      }}
    >
      <Drawer.Screen
        name="(tabs)"
        options={{
          drawerLabel: "Home",
        }}
      />
    </Drawer>
  );
};

export default DrawerLayout;
