import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFE3",
    paddingTop: scale(20),
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

  titleContainer: {
    paddingHorizontal: scale(20),
  },

  cartItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: scale(20),
    paddingBottom: scale(20),
    borderBottomWidth: scale(1),
    borderBottomColor: "#F6F0D4",
  },

  productContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: scale(10),
  },

  productImage: {
    width: scale(90),
    height: scale(90),
    borderRadius: scale(10),
  },

  productInfo: {
    flex: 1,
    marginLeft: scale(10),
  },

  productName: {
    fontFamily: "poppins-medium",
    fontSize: scale(16),
    color: "#1F1500",
  },

  sellerText: {
    fontFamily: "poppins-regular",
    fontSize: scale(14),
    color: "#C2A26F",
  },

  priceText: {
    marginTop: scale(10),
    fontFamily: "poppins-medium",
    fontSize: scale(16),
    color: "#1F1500",
  },

  quantityContainer: {
    alignItems: "center",
    paddingRight: scale(10),
  },

  quantityText: {
    marginVertical: scale(10),
    fontFamily: "poppins-regular",
    fontSize: scale(14),
    color: "#1F1500",
  },

  deleteButton: {
    marginTop: scale(12),
  },

  priceDetailsContainer: {
    backgroundColor: "#FFFFE3",
    borderTopWidth: scale(1),
    borderTopColor: "#F6F0D4",
    paddingHorizontal: scale(20),
    paddingTop: scale(20),
  },

  summaryRow: {
    marginTop: scale(10),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  summaryLabel: {
    fontFamily: "poppins-regular",
    fontSize: scale(14),
    color: "#C2A26F",
  },

  summaryValue: {
    fontFamily: "poppins-medium",
    fontSize: scale(14),
    color: "#C2A26F",
  },

  divider: {
    marginVertical: scale(10),
    borderBottomWidth: scale(1),
    borderBottomColor: "#E9DFC0",
    borderStyle: "dashed",
  },

  totalRow: {
    marginBottom: scale(20),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  totalText: {
    fontFamily: "poppins-medium",
    fontSize: scale(16),
    color: "#1F1500",
  },
});

export default styles;
