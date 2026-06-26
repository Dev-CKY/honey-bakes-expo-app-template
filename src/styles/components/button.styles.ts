import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F7BC5D",
    borderRadius: scale(999),
    alignItems: "center",
    justifyContent: "center",
    height: scale(60),
    marginBottom: scale(20),
    borderColor: "#1F1500",
    borderWidth: scale(1.5),
  },
  label: {
    color: "#1F1500",
    fontFamily: "poppins-medium",
    fontSize: scale(16),
  },
});

export default styles;
