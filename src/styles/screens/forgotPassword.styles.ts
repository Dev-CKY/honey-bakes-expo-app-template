import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: scale(20),
  },

  rememberPasswordLink: {
    alignSelf: "flex-end",
    marginBottom: scale(20),
  },

  rememberPasswordText: {
    color: "#1F1500",
    fontFamily: "poppins-medium",
    fontSize: scale(14),
  },
});

export default styles;
