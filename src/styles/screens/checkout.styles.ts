import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFE3",
  },

  contentWrapper: {
    flex: 1,
  },

  scrollContent: {
    paddingTop: scale(20),
  },

  horizontalPadding: {
    paddingHorizontal: scale(20),
  },

  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: scale(20),
    paddingTop: scale(20),
  },

  addNewText: {
    fontSize: scale(14),
    fontFamily: "poppins-medium",
    color: "#000000",
  },

  addressContainer: {
    paddingHorizontal: scale(20),
    paddingTop: scale(20),
    gap: scale(20),
  },

  moreAddressesButton: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: scale(25),
    borderWidth: scale(1.5),
    borderStyle: "dashed",
    borderColor: "#1F1500",
    width: "100%",
    height: scale(50),
    alignSelf: "center",
  },

  moreAddressesText: {
    fontSize: scale(14),
    fontFamily: "poppins-medium",
    color: "#1F1500",
  },

  paymentHeadingContainer: {
    padding: scale(20),
  },

  paymentMethodsContent: {
    paddingHorizontal: scale(20),
    gap: scale(16),
  },

  orContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: scale(20),
  },

  cardFormContainer: {
    marginHorizontal: scale(20),
    marginTop: scale(20),
  },

  disabledCardForm: {
    borderRadius: scale(16),
    borderWidth: scale(1.5),
    borderStyle: "dashed",
    borderColor: "#F7BC5D",
    padding: scale(10),
  },

  cardFormHint: {
    marginBottom: scale(12),
    textAlign: "center",
    fontSize: scale(12),
    fontFamily: "poppins-medium",
    color: "#1F1500",
  },

  cardRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  halfWidth: {
    width: "48%",
  },

  rememberContainer: {
    marginTop: scale(10),
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: scale(10),
  },

  checkbox: {
    height: scale(30),
    width: scale(30),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: scale(5),
    borderWidth: scale(1),
    borderColor: "#1F1500",
  },

  checkboxActive: {
    backgroundColor: "#F7BC5D",
  },

  rememberText: {
    marginLeft: scale(10),
    fontSize: scale(16),
    fontFamily: "poppins-medium",
    color: "#1F1500",
  },

  footer: {
    marginVertical: scale(20),
    height: scale(60),
    width: "85%",
    alignSelf: "center",
    borderRadius: scale(30),
    backgroundColor: "#F6F0D4",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  totalPrice: {
    paddingLeft: scale(20),
    width: "40%",
    fontSize: scale(20),
    fontFamily: "poppins-medium",
    color: "#1F1500",
  },

  placeOrderButton: {
    height: scale(60),
    width: "60%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: scale(30),
    borderWidth: scale(1.5),
    borderColor: "#1F1500",
    backgroundColor: "#F7BC5D",
  },

  placeOrderText: {
    fontSize: scale(16),
    fontFamily: "poppins-medium",
    color: "#1F1500",
  },
});

export default styles;
