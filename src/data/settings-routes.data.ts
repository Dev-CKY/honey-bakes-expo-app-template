import bellFilled from "../assets/icons/svg/bellFilled";
import language from "../assets/icons/svg/language";
import lockFilled from "../assets/icons/svg/lockFilled";
import pencilFilled from "../assets/icons/svg/pencilFilled";
import person from "../assets/icons/svg/person";
import sun from "../assets/icons/svg/sun";

export const SETTINGS_ROUTES = [
  {
    id: 1,
    icon: person,
    routeName: "Profile",
    onPress: () => {},
  },
  {
    id: 2,
    icon: pencilFilled,
    routeName: "Edit profile",
    onPress: () => {},
  },
  {
    id: 3,
    icon: lockFilled,
    routeName: "Reset password",
    onPress: () => {},
  },
  {
    id: 4,
    icon: language,
    routeName: "Languages",
    onPress: () => {},
  },
];

export const APP_CONTROLS = [
  {
    id: 1,
    key: "notifications",
    icon: bellFilled,
    routeName: "Notifications",
  },
  {
    id: 2,
    key: "darkMode",
    icon: sun,
    routeName: "Dark mode",
  },
];
