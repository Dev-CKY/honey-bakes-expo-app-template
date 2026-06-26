import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

const styles = StyleSheet.create({
  base: {
    flex: 1,
    height: scale(50),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: scale(1.5),
    borderRadius: scale(25),
    paddingHorizontal: scale(12),
  },
  symbol: {
    marginRight: scale(8),
    fontSize: scale(22),
    color: "#1F1500",
  },
  title: {
    fontSize: scale(17),
    fontFamily: "poppins-medium",
    color: "#1F1500",
  },
});

export default styles;
