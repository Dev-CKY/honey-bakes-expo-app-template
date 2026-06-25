import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFE3",
  },

  banner: {
    height: scale(300),
    width: "100%",
  },

  bannerContent: {
    padding: scale(20),
  },

  successContainer: {
    marginTop: scale(40),
    alignItems: "center",
  },

  successCircle: {
    height: scale(100),
    width: scale(100),
    borderRadius: scale(50),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#DBFFC9",
  },

  successIcon: {
    height: scale(50),
    width: scale(50),
  },

  successTitle: {
    marginTop: scale(10),
    fontSize: scale(20),
    fontFamily: "poppins-medium",
    color: "#1F1500",
  },

  successDescription: {
    marginTop: scale(5),
    fontSize: scale(14),
    lineHeight: scale(22),
    textAlign: "center",
    fontFamily: "poppins-regular",
    color: "#C2A26F",
  },
});

export default styles;
