import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFE3",
    paddingHorizontal: scale(20),
    paddingTop: scale(20),
  },

  searchContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },

  searchWrapper: {
    flex: 1,
    marginRight: scale(12),
  },

  filterButton: {
    width: scale(50),
    height: scale(50),
    borderRadius: scale(25),
    borderWidth: scale(1.5),
    borderColor: "#1F1500",
    backgroundColor: "#F7BC5D",
    alignItems: "center",
    justifyContent: "center",
  },

  resultsText: {
    fontSize: scale(14),
    color: "#C2A26F",
    marginTop: scale(12),
    marginBottom: scale(20),
    fontFamily: "poppins-regular",
  },

  columnWrapper: {
    gap: scale(12),
    marginBottom: scale(20),
  },

  flatListContent: {
    paddingBottom: scale(30),
  },
});

export default styles;
