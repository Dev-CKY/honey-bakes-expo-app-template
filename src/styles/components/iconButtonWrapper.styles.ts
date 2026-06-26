import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

const styles = StyleSheet.create({
  container: {
    width: scale(48),
    height: scale(48),
    borderWidth: scale(1),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: scale(999),
    marginBottom: scale(20),
  },
});

export default styles;
