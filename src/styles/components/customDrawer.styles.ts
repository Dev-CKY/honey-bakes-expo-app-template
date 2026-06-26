import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

const styles = StyleSheet.create({
  content: {
    flexGrow: 1,
    backgroundColor: "#FFFFE3",
  },
  profilePressable: {
    paddingHorizontal: scale(20),
  },
  profileRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: scale(44),
    height: scale(44),
    borderRadius: scale(44) / 2,
  },
  profileName: {
    fontFamily: "poppins-medium",
    color: "#1F1500",
    fontSize: scale(15),
    marginLeft: scale(12),
  },
  divider: {
    height: scale(1),
    backgroundColor: "#E3DEC0",
    marginTop: scale(20),
  },
  menu: {
    paddingTop: scale(20),
  },
  menuItemRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  menuIconWrap: {
    width: scale(44),
    height: scale(44),
    marginRight: scale(16),
    borderRadius: scale(44) / 2,
    backgroundColor: "#F6F0D4",
    alignItems: "center",
    justifyContent: "center",
  },
  menuText: {
    fontFamily: "poppins-medium",
    color: "#1F1500",
    fontSize: scale(16),
  },
});

export default styles;
