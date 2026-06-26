import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

const styles = StyleSheet.create({
  list: {
    marginTop: scale(20),
  },
  contentContainer: {
    paddingHorizontal: scale(20),
  },
  itemSpacing: {
    marginRight: scale(10),
  },
});

export default styles;
