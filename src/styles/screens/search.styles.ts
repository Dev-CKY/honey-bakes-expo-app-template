import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFE3",
    paddingTop: scale(20),
  },

  horizontalPadding: {
    paddingHorizontal: scale(20),
  },

  contentContainer: {
    flex: 1,
    paddingHorizontal: scale(20),
  },

  searchRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: scale(12),
  },

  searchBarContainer: {
    flex: 1,
    width: "100%",
  },

  cancelText: {
    fontSize: scale(16),
    fontFamily: "poppins-medium",
    color: "#1F1500",
  },

  scrollContent: {
    paddingBottom: scale(20),
  },

  sectionContainer: {
    marginTop: scale(20),
  },

  sectionHeader: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },

  clearAllText: {
    fontSize: scale(14),
    fontFamily: "poppins-medium",
    color: "#1F1500",
  },

  recentSearchList: {
    gap: scale(12),
    marginTop: scale(20),
  },

  recentSearchChip: {
    height: scale(44),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: scale(20),
    paddingRight: scale(10),
    borderWidth: scale(1),
    borderColor: "#DDD5B5",
    borderRadius: scale(22),
  },

  recentSearchText: {
    fontSize: scale(16),
    fontFamily: "poppins-medium",
    color: "#1F1500",
  },

  trendingHeader: {
    marginBottom: scale(10),
  },

  trendingItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: scale(10),
  },

  trendingContent: {
    flex: 1,
  },

  trendingTitle: {
    fontSize: scale(16),
    fontFamily: "poppins-medium",
    color: "#1F1500",
  },

  trendingSubtitle: {
    fontSize: scale(14),
    fontFamily: "poppins-regular",
    color: "#C7A16A",
  },
});

export default styles;
