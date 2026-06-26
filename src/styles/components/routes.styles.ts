import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

const styles = StyleSheet.create({
  wrapper: {
    borderBottomColor: "#F6F0D4",
    borderBottomWidth: 1,
    marginTop: scale(20),
    paddingHorizontal: scale(20),
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: scale(20),
  },
  leftRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: scale(15),
  },
  iconContainer: {
    backgroundColor: "#F6F0D4",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: scale(48),
    width: scale(48),
    borderRadius: scale(24),
  },
  title: {
    color: "#1F1500",
    fontFamily: "poppins-medium",
    fontSize: scale(16),
  },
});

export default styles;
