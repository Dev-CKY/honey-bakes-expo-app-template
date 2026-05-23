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
      router.push("/screens/notifications");
    },
  },
  {
    id: 2,
    icon: heart,
    routeName: "Wishlist",
    onPress: () => {
      router.push("/screens/wishlist");
    },
  },
  {
    id: 3,
    icon: order,
    routeName: "My orders",
    onPress: () => {},
  },
  {
    id: 4,
    icon: faq,
    routeName: "FAQ's",
    onPress: () => {},
  },
  {
    id: 5,
    icon: settings,
    routeName: "Settings",
    onPress: () => {},
  },
  {
    id: 6,
    icon: headphone,
    routeName: "Help center",
    onPress: () => {},
  },
];

export default PROFILE_ROUTES;
