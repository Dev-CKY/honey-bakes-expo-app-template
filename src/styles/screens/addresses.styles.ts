import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: "#FFFFE3",
    paddingVertical: scale(20),
  },

  scrollContent: {
    paddingBottom: scale(40),
  },

  horizontalPadding: {
    paddingHorizontal: scale(20),
  },

  headingContainer: {
    marginBottom: scale(20),
    paddingHorizontal: scale(20),
  },

  card: {
    marginHorizontal: scale(20),
    marginBottom: scale(20),
    minHeight: scale(150),
    borderWidth: scale(1.5),
    borderRadius: scale(10),
    padding: scale(16),
  },

  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  title: {
    fontSize: scale(16),
    fontFamily: "poppins-medium",
    color: "#1F1500",
  },

  addressText: {
    marginTop: scale(12),
    fontSize: scale(14),
    lineHeight: scale(22),
    fontFamily: "poppins-medium",
  },

  phoneContainer: {
    marginTop: scale(10),
    flexDirection: "row",
    alignItems: "center",
  },

  phoneLabel: {
    fontSize: scale(14),
    fontFamily: "poppins-medium",
    color: "#1F1500",
  },

  phoneValue: {
    marginLeft: scale(4),
    fontSize: scale(14),
    fontFamily: "poppins-medium",
  },

  addAddressContainer: {
    marginHorizontal: scale(20),
  },

  addAddressButton: {
    height: scale(50),
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: scale(25),
    borderWidth: scale(1.5),
    borderStyle: "dashed",
    borderColor: "#1F1500",
  },

  addAddressText: {
    fontSize: scale(14),
    fontFamily: "poppins-medium",
    color: "#1F1500",
  },
});

export default styles;
