import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: scale(20),
  },

  forgotPasswordLink: {
    alignSelf: "flex-end",
    marginBottom: scale(20),
  },

  forgotPasswordText: {
    color: "#1F1500",
    fontFamily: "poppins-medium",
    fontSize: scale(14),
  },

  accountText: {
    alignSelf: "center",
    color: "#C2A26F",
    fontFamily: "poppins-regular",
    fontSize: scale(14),
  },

  signUpText: {
    color: "#1F1500",
    fontFamily: "poppins-medium",
    fontSize: scale(14),
  },
});

export default styles;
