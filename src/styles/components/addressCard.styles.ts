import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

const styles = StyleSheet.create({
  containerBase: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: scale(1),
    borderRadius: scale(14),
    padding: scale(15),
  },
  radioWrap: {
    marginRight: scale(14),
  },
  radio: {
    height: scale(24),
    width: scale(24),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: scale(12),
    borderWidth: scale(1.5),
  },
  dot: {
    height: scale(16),
    width: scale(16),
    borderRadius: scale(8),
    borderWidth: scale(1.5),
    borderColor: "#1F1500",
    backgroundColor: "#F7BC5D",
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: scale(16),
    fontFamily: "poppins-medium",
    color: "#1F1500",
  },
  address: {
    fontSize: scale(14),
    fontFamily: "poppins-medium",
    color: "#C2A26F",
  },
});

export default styles;
