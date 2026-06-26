import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

const styles = StyleSheet.create({
  container: {
    height: scale(50),
    marginBottom: scale(10),
    paddingHorizontal: scale(20),
    flexDirection: "row",
    alignItems: "center",
    borderRadius: scale(999),
    borderColor: "#F6F0D4",
    borderWidth: 1,
    backgroundColor: "#FFFFE3",
  },
  leftIcon: {
    marginRight: scale(12),
  },
  input: {
    flex: 1,
    color: "#3E3A2F",
    fontFamily: "poppins-regular",
    fontSize: scale(14),
  },
  rightIcon: {
    marginLeft: scale(12),
  },
});

export default styles;
