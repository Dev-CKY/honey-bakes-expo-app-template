import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: scale(20),
  },

  accountText: {
    alignSelf: "center",
    color: "#C2A26F",
    fontFamily: "poppins-regular",
    fontSize: scale(14),
  },

  signInText: {
    color: "#1F1500",
    fontFamily: "poppins-medium",
    fontSize: scale(14),
  },
});

export default styles;
