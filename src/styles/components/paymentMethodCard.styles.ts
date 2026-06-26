import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

const styles = StyleSheet.create({
  containerBase: {
    height: scale(88),
    width: scale(118),
    alignItems: "center",
    justifyContent: "center",
    borderWidth: scale(1),
    borderRadius: scale(12),
  },
  containerSelected: {
    backgroundColor: "#F7BC5D",
    borderColor: "#1F1500",
  },
  containerDefault: {
    backgroundColor: "#FFFFE3",
    borderColor: "#EEE8C9",
  },
  image: {
    height: scale(28),
    width: scale(40),
  },
  titleSelected: {
    marginTop: scale(10),
    fontSize: scale(14),
    color: "#1F1500",
    fontFamily: "poppins-medium",
  },
  titleDefault: {
    marginTop: scale(10),
    fontSize: scale(14),
    color: "#C2A26F",
    fontFamily: "poppins-medium",
  },
});

export default styles;
