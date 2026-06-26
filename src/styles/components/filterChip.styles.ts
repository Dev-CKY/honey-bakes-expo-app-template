import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

const styles = StyleSheet.create({
  base: {
    borderRadius: scale(999),
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    paddingHorizontal: scale(20),
    height: scale(44),
    gap: scale(10),
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: scale(4),
  },
  text: {
    fontSize: scale(12),
    fontFamily: "poppins-medium",
  },
});

export default styles;
