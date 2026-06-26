import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: "#F6F0D4",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    minHeight: scale(150),
    borderRadius: scale(10),
    paddingVertical: scale(18),
  },
  title: {
    fontFamily: "poppins-medium",
    color: "#1F1500",
    fontSize: scale(15),
  },
  image: {
    width: scale(50),
    height: scale(50),
    marginTop: scale(12),
  },
});

export default styles;
