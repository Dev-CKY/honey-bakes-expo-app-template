import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

export const styles = StyleSheet.create({
  triggerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  label: {
    width: scale(80),
    fontSize: scale(16),
    color: "#C2A26F",
    fontFamily: "poppins-regular",
  },

  dateContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  dateItem: {
    width: scale(80),
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#E8DDB6",
    paddingBottom: scale(10),
  },

  dateText: {
    fontSize: scale(18),
    color: "#1F1500",
    fontFamily: "poppins-medium",
  },

  modalOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.4)",
    paddingHorizontal: scale(5),
  },

  modalContainer: {
    width: "100%",
    borderRadius: scale(24),
    backgroundColor: "#FFFFFF",
    padding: scale(20),
  },

  headerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    columnGap: scale(10),
    marginBottom: scale(20),
  },

  selectorButton: {
    borderRadius: scale(999),
    borderWidth: scale(1),
    borderColor: "#E8DDB6",
    width: "50%",
    height: scale(30),
    alignItems: "center",
    justifyContent: "center",
  },

  selectorButtonText: {
    fontSize: scale(12),
    color: "#1F1500",
    fontFamily: "poppins-medium",
  },

  doneButton: {
    marginTop: scale(5),
    height: scale(56),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: scale(28),
    backgroundColor: "#F7BC5D",
  },

  doneButtonText: {
    fontSize: scale(16),
    color: "#1F1500",
    fontFamily: "poppins-medium",
  },

  sectionTitle: {
    marginBottom: scale(20),
    fontSize: scale(20),
    textAlign: "center",
    color: "#1F1500",
    fontFamily: "poppins-medium",
  },

  monthsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },

  monthPressable: {
    marginBottom: scale(12),
    paddingHorizontal: scale(8),
    width: "33.33%",
  },

  monthItem: {
    borderRadius: scale(999),
    paddingVertical: scale(12),
    alignItems: "center",
    justifyContent: "center",
  },

  monthItemSelected: {
    backgroundColor: "#F7BC5D",
  },

  monthItemUnselected: {
    borderWidth: 1,
    borderColor: "#E8DDB6",
  },

  monthText: {
    textAlign: "center",
    color: "#1F1500",
    fontFamily: "poppins-medium",
    fontSize: scale(14),
  },

  monthTextSelected: {
    fontFamily: "poppins-medium",
  },

  yearTitle: {
    marginBottom: scale(20),
    textAlign: "center",
    fontSize: scale(20),
    color: "#1F1500",
    fontFamily: "poppins-medium",
  },

  yearScrollView: {
    maxHeight: scale(400),
  },

  yearItem: {
    paddingVertical: scale(16),
  },

  yearText: {
    textAlign: "center",
    fontSize: scale(14),
    color: "#1F1500",
    fontFamily: "poppins-regular",
  },

  yearTextSelected: {
    color: "#F7BC5D",
    fontFamily: "poppins-medium",
  },
});
