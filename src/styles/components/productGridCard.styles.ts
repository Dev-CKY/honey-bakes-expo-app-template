import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: "#F6F0D4",
    borderWidth: 1,
    backgroundColor: "#FFFFE3",
    overflow: "hidden",
    borderRadius: scale(12),
  },
  imageWrapper: {
    padding: scale(8),
  },
  imageBox: {
    width: scale(125),
    height: scale(100),
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: scale(10),
  },
  addButton: {
    position: "absolute",
    alignSelf: "center",
    backgroundColor: "#F7BC5D",
    borderRadius: scale(999),
    borderColor: "#1F1500",
    borderWidth: 1,
    bottom: scale(-10),
    paddingHorizontal: scale(18),
    paddingVertical: scale(5),
  },
  addButtonText: {
    fontFamily: "poppins-medium",
    color: "#1F1500",
    fontSize: scale(12),
  },
  content: {
    alignItems: "center",
    paddingTop: scale(18),
    paddingBottom: scale(12),
    paddingHorizontal: scale(10),
  },
  title: {
    color: "#1F1500",
    fontFamily: "poppins-medium",
    fontSize: scale(16),
  },
  brand: {
    color: "#C2A26F",
    fontFamily: "poppins-regular",
    fontSize: scale(12),
  },
  price: {
    fontFamily: "poppins-medium",
    color: "#1F1500",
    fontSize: scale(16),
    marginTop: scale(6),
  },
});

export default styles;
