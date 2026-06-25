import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFE3",
    paddingVertical: scale(20),
  },

  contentContainer: {
    flexGrow: 1,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: scale(20),
  },

  headingContainer: {
    paddingHorizontal: scale(20),
  },

  wishlistItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginTop: scale(20),
    paddingBottom: scale(20),
    borderBottomWidth: scale(1),
    borderBottomColor: "#F6F0D4",
  },

  wishlistItemContent: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: scale(20),
  },

  productImage: {
    width: scale(90),
    height: scale(90),
  },

  productInfo: {
    marginLeft: scale(10),
  },

  productHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: scale(250),
  },

  productName: {
    fontSize: scale(16),
    fontFamily: "poppins-medium",
    color: "#1F1500",
  },

  removeButton: {
    paddingRight: scale(20),
  },

  sellerText: {
    fontSize: scale(14),
    fontFamily: "poppins-regular",
    color: "#C2A26F",
  },

  priceText: {
    marginTop: scale(10),
    fontSize: scale(16),
    fontFamily: "poppins-medium",
    color: "#1F1500",
  },

  buttonContainer: {
    marginTop: scale(20),
    paddingHorizontal: scale(20),
  },
});

export default styles;
