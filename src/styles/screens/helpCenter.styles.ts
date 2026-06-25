import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFE3",
    paddingVertical: scale(20),
  },

  scrollContent: {
    paddingBottom: scale(40),
  },

  horizontalPadding: {
    paddingHorizontal: scale(20),
  },

  toggleContainer: {
    padding: scale(20),
  },

  toggleWrapper: {
    height: scale(52),
    overflow: "hidden",
    borderRadius: scale(26),
    backgroundColor: "#F4EFD7",
    padding: scale(4),
  },

  activeToggleBackground: {
    position: "absolute",
    left: scale(4),
    top: scale(4),
    height: scale(44),
    borderRadius: scale(22),
    borderWidth: scale(1),
    borderColor: "#2E261C",
    backgroundColor: "#F0BA5C",
  },

  toggleButtonsRow: {
    flex: 1,
    flexDirection: "row",
  },

  faqContainer: {
    rowGap: scale(4),
  },

  contactContainer: {
    marginTop: -scale(10),
  },
});

export default styles;
