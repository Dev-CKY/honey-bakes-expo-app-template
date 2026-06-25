import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFDE7",
    paddingHorizontal: scale(20),
    paddingTop: scale(20),
  },

  contentContainer: {
    paddingBottom: scale(40),
  },

  orderedItemHeading: {
    marginVertical: scale(20),
  },

  timelineContainer: {
    marginTop: scale(20),
  },

  timelineRow: {
    flexDirection: "row",
  },

  timelineLeft: {
    alignItems: "center",
    marginRight: scale(15),
  },

  currentOuterCircle: {
    width: scale(24),
    height: scale(24),
    borderRadius: scale(12),
    borderWidth: scale(2),
    borderColor: "#F7BC5D",
    alignItems: "center",
    justifyContent: "center",
  },

  currentInnerCircle: {
    width: scale(14),
    height: scale(14),
    borderRadius: scale(7),
    backgroundColor: "#F7BC5D",
  },

  circle: {
    width: scale(24),
    height: scale(24),
    borderRadius: scale(12),
    borderWidth: scale(2),
    borderColor: "#1F1500",
    alignItems: "center",
    justifyContent: "center",
  },

  circleInner: {
    width: scale(14),
    height: scale(14),
    borderRadius: scale(7),
    backgroundColor: "#F7BC5D",
  },

  lineContainer: {
    position: "relative",
    height: scale(70),
    width: scale(2),
    overflow: "hidden",
  },

  lineBase: {
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    borderLeftWidth: scale(2),
    borderStyle: "dashed",
  },

  animatedLine: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    backgroundColor: "#F7BC5D",
  },

  completedLine: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "#F7BC5D",
  },

  timelineContent: {
    flex: 1,
    paddingBottom: scale(25),
  },

  title: {
    fontSize: scale(18),
    color: "#1F1500",
    fontFamily: "poppins-medium",
  },

  time: {
    fontSize: scale(12),
    marginTop: scale(2),
    color: "#C2A26F",
    fontFamily: "poppins-regular",
  },
});

export default styles;
