import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#FFFFE3",
  },

  profileRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  avatar: {
    width: scale(44),
    height: scale(44),
    borderRadius: scale(22),
  },

  profileName: {
    marginLeft: scale(12),
    fontSize: scale(15),
    fontFamily: "poppins-medium",
    color: "#1F1500",
  },

  divider: {
    height: scale(1),
    marginTop: scale(20),
    backgroundColor: "#E3DEC0",
  },

  menuContainer: {
    paddingTop: scale(20),
    rowGap: scale(30),
  },

  menuItem: {
    flexDirection: "row",
    alignItems: "center",
  },

  iconContainer: {
    width: scale(44),
    height: scale(44),
    marginRight: scale(16),
    borderRadius: scale(22),
    backgroundColor: "#F6F0D4",
    alignItems: "center",
    justifyContent: "center",
  },

  menuTitle: {
    fontSize: scale(16),
    fontFamily: "poppins-medium",
    color: "#1F1500",
  },
});

export default styles;
