import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#2E261C",
    fontFamily: "poppins-medium",
    fontSize: scale(16),
  },
});

export default styles;
