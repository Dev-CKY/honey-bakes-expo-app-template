import { TAB_BAR_COLORS, TAB_BAR_SIZES } from "@/src/constants/tab-bar";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  outer: {
    position: "absolute",
    left: 0,
    right: 0,
    alignItems: "center",
  },
  bar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 999,
    width: "78%",
    height: TAB_BAR_SIZES.height,
    backgroundColor: TAB_BAR_COLORS.background,
    paddingHorizontal: 10,
  },
});

export default styles;
