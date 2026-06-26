import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

const styles = StyleSheet.create({
  deleteBg: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: "#FF0000",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  deleteText: {
    color: "#FFFFFF",
    fontFamily: "poppins-medium",
    fontSize: scale(14),
  },
  card: {
    flexDirection: "row",
    alignItems: "flex-start",
    borderBottomColor: "#F6F0D4",
    borderBottomWidth: 1,
    backgroundColor: "#FFFFE3",
  },
  avatarWrap: {
    borderRadius: scale(999),
    backgroundColor: "#F6F0D4",
    alignItems: "center",
    justifyContent: "center",
    width: scale(48),
    height: scale(48),
    marginRight: scale(10),
  },
  avatar: {
    width: scale(30),
    height: scale(30),
    borderRadius: scale(15),
  },
  content: {
    flex: 1,
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    color: "#1F1500",
    fontFamily: "poppins-medium",
    fontSize: scale(16),
    marginRight: scale(12),
    flex: 1,
  },
  time: {
    color: "#1F1500",
    fontFamily: "poppins-medium",
    fontSize: scale(14),
  },
  description: {
    color: "#C2A26F",
    fontFamily: "poppins-regular",
    fontSize: scale(14),
    marginTop: scale(2),
  },
  deleting: {
    color: "#FF0000",
    fontFamily: "poppins-medium",
    fontSize: scale(12),
    marginTop: scale(6),
  },
});

export default styles;
