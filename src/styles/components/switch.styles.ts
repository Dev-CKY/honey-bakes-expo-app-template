import { Platform, StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

const styles = StyleSheet.create({
  containerStyle: {
    width: scale(58),
    height: scale(32),
    borderRadius: scale(50),
    padding: Platform.OS === "ios" ? scale(5) : scale(3),
  },
  circleStyle: {
    width: scale(26),
    height: scale(26),
    borderRadius: scale(13),
  },
});

export default styles;
