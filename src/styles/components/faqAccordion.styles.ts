import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    borderBottomWidth: 1,
    borderBottomColor: "#D8D1BA",
    paddingHorizontal: scale(20),
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: scale(15),
  },
  question: {
    flex: 1,
    paddingRight: scale(16),
    fontSize: scale(16),
    fontFamily: "poppins-medium",
    color: "#1F1500",
  },
  answer: {
    fontSize: scale(14),
    lineHeight: scale(22),
    fontFamily: "poppins-regular",
    color: "#6B645C",
    paddingBottom: scale(18),
  },
});

export default styles;
