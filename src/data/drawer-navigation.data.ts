import box from "../assets/icons/svg/box";
import headphoneFilled from "../assets/icons/svg/headphoneFilled";
import heartFilled from "../assets/icons/svg/heartFilled";
import map from "../assets/icons/svg/map";

type DrawerItem = {
  title: string;
  icon: string;
  route: any;
};

const DRAWER_NAVIGATION_MENU_ITEMS = [
  {
    title: "My orders",
    icon: box,
    route: "/screens/my-orders",
  },
  {
    title: "Wishlist",
    icon: heartFilled,
    route: "/screens/wishlist",
  },
  {
    title: "My Addresses",
    icon: map,
    route: "/screens/addresses",
  },
  {
    title: "Help and support",
    icon: headphoneFilled,
    route: "/screens/help-center",
  },
] as const;

export default DRAWER_NAVIGATION_MENU_ITEMS;
