import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

const styles = StyleSheet.create({
  pressable: {
    flexDirection: "row",
    borderBottomColor: "#ECE5C8",
    borderBottomWidth: 1,
    paddingHorizontal: scale(20),
    paddingVertical: scale(20),
  },
  image: {
    height: scale(90),
    width: scale(90),
    borderRadius: scale(14),
  },
  content: {
    marginLeft: scale(14),
    flex: 1,
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  titleText: {
    flex: 1,
    fontFamily: "poppins-medium",
    color: "#2A1F15",
    fontSize: scale(20),
  },
  statusBadge: {
    alignSelf: "flex-start",
    borderRadius: scale(999),
    paddingHorizontal: scale(16),
    paddingVertical: scale(7),
  },
  statusText: {
    fontFamily: "poppins-medium",
    fontSize: scale(14),
  },
  dateRow: {
    marginTop: scale(10),
  },
  dateText: {
    marginLeft: scale(6),
    fontSize: scale(14),
    fontFamily: "poppins-regular",
    color: "#C59B61",
  },
  spacer: {
    width: scale(12),
  },
});

export default styles;
