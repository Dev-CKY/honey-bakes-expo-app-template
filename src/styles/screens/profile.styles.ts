import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFE3",
    paddingVertical: scale(20),
  },

  contentContainer: {
    paddingBottom: scale(120),
  },

  headerContainer: {
    paddingHorizontal: scale(20),
  },

  avatarWrapper: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: scale(20),
  },

  avatarContainer: {
    position: "relative",
  },

  avatarImage: {
    height: scale(100),
    width: scale(100),
    borderRadius: scale(50),
  },

  editButton: {
    position: "absolute",
    bottom: 0,
    right: 0,
    height: scale(38),
    width: scale(38),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: scale(19),
    borderWidth: scale(1),
    borderColor: "#1F1500",
    backgroundColor: "#F7BC5D",
  },

  nameText: {
    fontSize: scale(20),
    marginTop: scale(5),
    color: "#1F1500",
    fontFamily: "kalnia-medium",
  },

  emailText: {
    fontSize: scale(14),
    color: "#C2A26F",
    fontFamily: "poppins-regular",
  },

  othersTitle: {
    fontSize: scale(20),
    padding: scale(20),
    marginTop: scale(5),
    color: "#1F1500",
    fontFamily: "kalnia-medium",
  },

  othersContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: scale(20),
  },

  accountContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: scale(20),
  },

  accountItem: {
    alignItems: "center",
  },

  smallAvatar: {
    height: scale(54),
    width: scale(54),
    borderRadius: scale(27),
  },

  accountLabel: {
    fontSize: scale(14),
    marginTop: scale(2),
    color: "#1F1500",
    fontFamily: "poppins-regular",
  },

  addButton: {
    height: scale(54),
    width: scale(54),
    borderRadius: scale(27),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F6F0D4",
  },

  logoutButton: {
    height: scale(54),
    width: scale(54),
    borderRadius: scale(27),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F7BC5D",
    borderWidth: scale(1.5),
    borderColor: "#1F1500",
  },
});

export default styles;
