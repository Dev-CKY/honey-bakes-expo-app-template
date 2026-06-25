import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFE3",
    padding: scale(20),
  },

  headingContainer: {
    marginBottom: scale(20),
  },

  columnWrapper: {
    gap: scale(12),
    marginBottom: scale(20),
  },

  contentContainer: {
    paddingBottom: scale(30),
  },
});

export default styles;
