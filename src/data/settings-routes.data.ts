import { router } from "expo-router";
import bellFilled from "../assets/icons/svg/bellFilled";
import language from "../assets/icons/svg/language";
import pencilFilled from "../assets/icons/svg/pencilFilled";
import person from "../assets/icons/svg/person";

export const SETTINGS_ROUTES = [
  {
    id: 1,
    icon: person,
    routeName: "Profile",
    onPress: () => {
      router.push("/profile");
    },
  },
  {
    id: 2,
    icon: pencilFilled,
    routeName: "Edit profile",
    onPress: () => {
      router.push("/screens/edit-profile");
    },
  },
  {
    id: 3,
    icon: language,
    routeName: "Languages",
    onPress: () => {
      router.push("/screens/languages");
    },
  },
];

export const APP_CONTROLS = [
  {
    id: 1,
    key: "notifications",
    icon: bellFilled,
    routeName: "Notifications",
  },
];
