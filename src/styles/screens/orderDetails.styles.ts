import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFDE7",
    paddingTop: scale(20),
    paddingHorizontal: scale(20),
  },

  contentContainer: {
    paddingBottom: scale(20),
  },

  sectionHeading: {
    marginVertical: scale(20),
  },

  summaryRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: scale(15),
  },

  label: {
    fontSize: scale(14),
    color: "#C2A26F",
    fontFamily: "poppins-regular",
  },

  value: {
    fontSize: scale(14),
    color: "#C2A26F",
    fontFamily: "poppins-medium",
  },

  paymentStatusContainer: {
    paddingHorizontal: scale(15),
    height: scale(30),
    borderRadius: scale(15),
    alignItems: "center",
    justifyContent: "center",
  },

  paymentStatusText: {
    fontSize: scale(14),
    fontFamily: "poppins-medium",
    textTransform: "capitalize",
  },

  divider: {
    borderBottomWidth: scale(1),
    borderBottomColor: "#E9DFC0",
  },

  totalContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: scale(15),
  },

  totalText: {
    fontSize: scale(14),
    color: "#1F1500",
    fontFamily: "poppins-medium",
  },

  cancelButtonContainer: {
    marginTop: scale(20),
  },

  trackOrderButton: {
    width: "100%",
    height: scale(60),
    marginVertical: scale(20),
    borderWidth: scale(1.5),
    borderStyle: "dashed",
    borderColor: "#1F1500",
    borderRadius: scale(30),
    alignItems: "center",
    justifyContent: "center",
  },

  trackOrderText: {
    fontSize: scale(16),
    color: "#1F1500",
    fontFamily: "poppins-medium",
  },
});

export default styles;
