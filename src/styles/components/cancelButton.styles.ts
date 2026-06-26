import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: scale(999),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F7715D",
    height: scale(60),
  },
  label: {
    fontFamily: "poppins-medium",
    color: "#FFFFFF",
    fontSize: scale(16),
  },
});

export default styles;
