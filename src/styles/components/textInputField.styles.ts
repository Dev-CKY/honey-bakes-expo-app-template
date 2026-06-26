import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFE3",
    borderColor: "#F6F0D4",
    height: scale(60),
    marginBottom: scale(10),
    borderRadius: scale(30),
    borderWidth: scale(1.5),
    paddingHorizontal: scale(20),
  },
  leftIcon: {
    marginRight: scale(12),
  },
  input: {
    flex: 1,
    fontFamily: "poppins-regular",
    color: "#3E3A2F",
    fontSize: scale(14),
  },
  rightIcon: {
    marginLeft: scale(12),
  },
});

export default styles;
