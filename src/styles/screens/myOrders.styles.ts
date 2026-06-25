import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFDE7",
    paddingTop: scale(20),
  },

  contentContainer: {
    paddingBottom: scale(20),
  },

  horizontalPadding: {
    paddingHorizontal: scale(20),
  },

  toggleContainer: {
    padding: scale(20),
  },

  toggleWrapper: {
    height: scale(52),
    padding: scale(4),
    overflow: "hidden",
    borderRadius: scale(52) / 2,
    backgroundColor: "#F4EFD7",
  },

  activeToggleBackground: {
    position: "absolute",
    left: scale(4),
    top: scale(4),
    height: scale(44),
    borderRadius: scale(44) / 2,
    borderWidth: scale(1),
    borderColor: "#2E261C",
    backgroundColor: "#F0BA5C",
  },

  toggleButtonsRow: {
    flex: 1,
    flexDirection: "row",
  },

  ordersContainer: {
    marginTop: scale(10),
  },

  emptyStateContainer: {
    alignItems: "center",
    paddingVertical: scale(40),
  },

  emptyStateText: {
    fontSize: scale(16),
    color: "#777",
    fontFamily: "poppins-medium",
  },
});

export default styles;
