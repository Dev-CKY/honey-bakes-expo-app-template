import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

const styles = StyleSheet.create({
  resendButton: {
    alignSelf: "flex-end",
    marginBottom: scale(20),
  },
  resendText: {
    color: "#1F1500",
    fontFamily: "poppins-medium",
    fontSize: scale(14),
  },
  timerText: {
    color: "#C2A26F",
    fontFamily: "poppins-regular",
    alignSelf: "flex-end",
    marginBottom: scale(20),
    fontSize: scale(14),
  },
  timerHighlight: {
    color: "#1F1500",
    fontFamily: "poppins-medium",
  },
});

export default styles;
