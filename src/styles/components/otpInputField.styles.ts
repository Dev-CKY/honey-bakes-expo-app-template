import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: scale(10),
  },
  root: {
    width: "100%",
    justifyContent: "space-between",
  },
  cell: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: scale(999),
    backgroundColor: "#FFFFE3",
    height: scale(50),
    width: scale(75),
    borderWidth: scale(1),
  },
  cellDefault: {
    borderColor: "#F6F0D4",
  },
  cellFocused: {
    borderColor: "#3E3A2F",
  },
  text: {
    fontSize: scale(15),
  },
});

export default styles;
