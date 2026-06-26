import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

const styles = StyleSheet.create({
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },

  sheet: {
    backgroundColor: "#FFFFE3",
    borderTopLeftRadius: scale(10),
    borderTopRightRadius: scale(10),
    paddingTop: scale(20),
    paddingBottom: scale(20),
  },
  categoriesTitleContainer: {
    paddingHorizontal: scale(20),
  },

  handle: {
    width: scale(60),
    height: scale(5),
    backgroundColor: "#C2A26F",
    borderRadius: scale(2.5),
    alignSelf: "center",
    marginBottom: scale(20),
  },

  centerTitle: {
    alignSelf: "center",
    marginBottom: scale(20),
  },

  section: {
    marginTop: scale(20),
    paddingHorizontal: scale(20),
  },

  priceRow: {
    marginTop: scale(20),
    paddingHorizontal: scale(20),
  },

  sliderSelected: {
    backgroundColor: "#1F1500",
    height: scale(4),
  },

  sliderUnselected: {
    backgroundColor: "#E5D6B8",
    height: scale(4),
  },

  sliderTrack: {
    height: scale(4),
  },

  sliderMarker: {
    width: scale(20),
    height: scale(20),
    borderRadius: scale(999),
    backgroundColor: "#1F1500",
    borderWidth: scale(3),
    borderColor: "#7C7C7C",
  },

  priceValuesRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  priceText: {
    fontSize: scale(14),
    fontFamily: "poppins-medium",
    color: "#1F1500",
  },

  buttonsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: scale(40),
  },

  resetButton: {
    flex: 1,
    height: scale(52),
    borderWidth: scale(1),
    borderStyle: "dashed",
    borderColor: "#1F1500",
    borderRadius: scale(999),
    alignItems: "center",
    justifyContent: "center",
    marginRight: scale(12),
  },

  applyButton: {
    flex: 1,
    height: scale(52),
    backgroundColor: "#F7BC5D",
    borderWidth: scale(1),
    borderColor: "#1F1500",
    borderRadius: scale(999),
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    fontFamily: "poppins-medium",
    color: "#1F1500",
  },
});

export default styles;
