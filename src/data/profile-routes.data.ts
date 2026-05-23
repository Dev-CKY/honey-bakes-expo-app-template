import { router } from "expo-router";
import bell from "../assets/icons/svg/bell";
import faq from "../assets/icons/svg/faq";
import headphone from "../assets/icons/svg/headphone";
import heart from "../assets/icons/svg/heart";
import order from "../assets/icons/svg/orders";
import settings from "../assets/icons/svg/settings";

const PROFILE_ROUTES = [
  {
    id: 1,
    icon: bell,
    routeName: "Notifications",
    onPress: () => {
      router.push("/(drawer)/(tabs)/notifications");
    },
  },
  {
    id: 2,
    icon: heart,
    routeName: "Wishlist",
    onPress: () => {
      console.log("Wishlist");
    },
  },
  {
    id: 3,
    icon: order,
    routeName: "My orders",
    onPress: () => {
      console.log("My orders");
    },
  },
  {
    id: 4,
    icon: faq,
    routeName: "FAQ's",
    onPress: () => {
      console.log("FAQ's");
    },
  },
  {
    id: 5,
    icon: settings,
    routeName: "Settings",
    onPress: () => {
      console.log("Settings");
    },
  },
  {
    id: 6,
    icon: headphone,
    routeName: "Help center",
    onPress: () => {
      console.log("Help center");
    },
  },
];

export default PROFILE_ROUTES;
