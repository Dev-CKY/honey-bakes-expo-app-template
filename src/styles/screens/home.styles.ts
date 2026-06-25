import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFE3",
  },

  headerBackground: {
    justifyContent: "center",
    height: scale(275),
    padding: scale(20),
    gap: scale(30),
  },

  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  avatar: {
    width: scale(44),
    height: scale(44),
    borderRadius: scale(22),
  },

  notificationButton: {
    width: scale(44),
    height: scale(44),
    borderRadius: scale(22),
    backgroundColor: "#FFFFE3",
    borderWidth: scale(1.5),
    alignItems: "center",
    justifyContent: "center",
  },

  greetingText: {
    fontFamily: "kalnia-medium",
    fontSize: scale(32),
    color: "#1F1500",
  },

  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: scale(5),
  },

  locationText: {
    fontFamily: "poppins-regular",
    fontSize: scale(14),
    color: "#1F1500",
  },

  body: {
    paddingVertical: scale(20),
  },

  sectionHeader: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    paddingHorizontal: scale(20),
  },

  sectionHeaderWithMargin: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    paddingHorizontal: scale(20),
    marginTop: scale(20),
  },

  viewAllText: {
    fontFamily: "poppins-medium",
    fontSize: scale(14),
    color: "#1F1500",
  },

  carouselContainer: {
    marginVertical: scale(20),
  },

  paginationContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: scale(12),
  },

  bannerContainer: {
    width: "100%",
    height: scale(155),
    marginVertical: scale(20),
    paddingHorizontal: scale(20),
  },

  bannerImage: {
    width: "100%",
    height: "100%",
    borderRadius: scale(10),
  },
});

export default styles;
