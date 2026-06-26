import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: scale(1),
    borderColor: "#F6F0D4",
    borderRadius: scale(10),
    padding: scale(5),
  },
  image: {
    width: scale(120),
    height: scale(100),
    borderRadius: scale(7),
  },
  details: {
    marginLeft: scale(10),
    flex: 1,
    justifyContent: "space-between",
  },
  title: {
    fontSize: scale(16),
    color: "#1F1500",
    fontFamily: "poppins-medium",
  },
  seller: {
    fontSize: scale(14),
    color: "#C2A26F",
    fontFamily: "poppins-regular",
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: scale(4),
  },
  ratingText: {
    marginLeft: scale(5),
    fontSize: scale(14),
    color: "#1F1500",
    fontFamily: "poppins-medium",
  },
  reviewsText: {
    marginLeft: scale(2),
    fontSize: scale(14),
    color: "#C2A26F",
    fontFamily: "poppins-regular",
  },
  price: {
    marginTop: scale(10),
    fontSize: scale(14),
    color: "#1F1500",
    fontFamily: "poppins-medium",
  },
});

export default styles;
