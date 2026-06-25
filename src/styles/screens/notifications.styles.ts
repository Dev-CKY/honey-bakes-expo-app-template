import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFE3",
    paddingVertical: scale(20),
  },

  contentContainer: {
    flexGrow: 1,
    paddingBottom: scale(20),
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: scale(20),
  },

  horizontalPadding: {
    paddingHorizontal: scale(20),
  },

  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  emptyTitle: {
    fontSize: scale(22),
    fontFamily: "poppins-medium",
    color: "#1F1500",
  },

  emptyDescription: {
    marginTop: scale(8),
    paddingHorizontal: scale(32),
    fontSize: scale(16),
    textAlign: "center",
    fontFamily: "poppins-regular",
    color: "#C2A26F",
  },
});

export default styles;
