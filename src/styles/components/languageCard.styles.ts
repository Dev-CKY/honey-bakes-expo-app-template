import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

const styles = StyleSheet.create({
  container: {
    minHeight: scale(150),
    borderRadius: scale(10),
    paddingVertical: scale(18),
    alignItems: "center",
    justifyContent: "center",
    borderWidth: scale(1),
  },
  title: {
    fontSize: scale(15),
    fontFamily: "poppins-medium",
    color: "#1F1500",
  },
  image: {
    width: scale(50),
    height: scale(50),
    marginTop: scale(12),
  },
});

export default styles;
