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

  backButton: {
    width: scale(48),
    height: scale(48),
    marginBottom: scale(20),
    borderWidth: scale(1),
    borderRadius: scale(24),
    alignItems: "center",
    justifyContent: "center",
  },

  sectionTitleContainer: {
    marginHorizontal: scale(20),
    marginTop: scale(20),
  },

  notificationItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: scale(20),
    paddingHorizontal: scale(20),
    paddingBottom: scale(20),
    borderBottomWidth: scale(1),
    borderBottomColor: "#F6F0D4",
  },

  notificationLeft: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: scale(15),
  },

  notificationIconWrapper: {
    width: scale(48),
    height: scale(48),
    borderRadius: scale(24),
    backgroundColor: "#F6F0D4",
    alignItems: "center",
    justifyContent: "center",
  },

  notificationText: {
    fontSize: scale(16),
    color: "#1F1500",
    fontFamily: "poppins-medium",
  },

  actionRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: scale(20),
    marginBottom: scale(20),
    paddingHorizontal: scale(20),
  },

  dangerText: {
    fontSize: scale(16),
    color: "#F7715D",
    fontFamily: "poppins-medium",
  },
});

export default styles;
