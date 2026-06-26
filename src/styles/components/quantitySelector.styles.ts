import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

export const DIGIT_HEIGHT = scale(24);

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    height: DIGIT_HEIGHT,
  },
  valueText: {
    fontFamily: "poppins-medium",
    color: "#1F1500",
    fontSize: scale(14),
  },
});

export default styles;
