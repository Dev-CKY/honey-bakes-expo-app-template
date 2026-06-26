import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    width: scale(80),
    fontSize: scale(16),
    fontFamily: "poppins-regular",
    color: "#C2A26F",
  },
  inputWrap: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#E8DFC7",
  },
  input: {
    paddingBottom: scale(12),
    fontSize: scale(18),
    fontFamily: "poppins-medium",
    color: "#1F1500",
  },
});

export default styles;
