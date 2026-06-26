import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

const styles = StyleSheet.create({
  contentContainer: {
    paddingTop: scale(20),
    paddingHorizontal: scale(20),
    gap: scale(20),
  },
  itemSpacing: {
    marginRight: scale(10),
  },
});

export default styles;
