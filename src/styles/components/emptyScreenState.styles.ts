import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  image: { width: scale(60), height: scale(60), marginBottom: scale(10) },
  title: {
    fontSize: scale(20),
    fontFamily: "poppins-medium",
    color: "#1F1500",
  },
  message: {
    marginTop: scale(8),
    textAlign: "center",
    fontSize: scale(14),
    fontFamily: "poppins-regular",
    color: "#C2A26F",
  },
});

export default styles;
