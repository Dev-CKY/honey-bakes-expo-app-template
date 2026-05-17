import { useFonts } from "expo-font";

export const useAppFonts = () => {
  return useFonts({
    "Poppins-Regular": require("@/src/assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("@/src/assets/fonts/Poppins-Medium.ttf"),
    "Kalnia-Medium": require("@/src/assets/fonts/Kalnia-Medium.ttf"),
    "Kalnia-Bold": require("@/src/assets/fonts/Kalnia-Bold.ttf"),
  });
};
