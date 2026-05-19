import React from "react";
import { Pressable } from "react-native";
import { SvgXml } from "react-native-svg";

import { TAB_BAR_COLORS, TAB_BAR_SIZES } from "@/src/constants/tab-bar";

type Props = {
  icon: string;
  focused: boolean;
  onPress: () => void;
  onLongPress: () => void;
  accessibilityLabel?: string;
  testID?: string;
};

export function TabButton({
  icon,
  focused,
  onPress,
  onLongPress,
  accessibilityLabel,
  testID,
}: Props) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={focused ? { selected: true } : {}}
      accessibilityLabel={accessibilityLabel}
      testID={testID}
      onPress={onPress}
      onLongPress={onLongPress}
      className="items-center justify-center rounded-full"
      style={{
        width: focused
          ? TAB_BAR_SIZES.activeIconContainer
          : TAB_BAR_SIZES.inactiveIconContainer,

        height: focused
          ? TAB_BAR_SIZES.activeIconContainer
          : TAB_BAR_SIZES.inactiveIconContainer,

        backgroundColor: focused ? TAB_BAR_COLORS.active : "transparent",
      }}
    >
      <SvgXml
        xml={icon}
        width={TAB_BAR_SIZES.icon}
        height={TAB_BAR_SIZES.icon}
      />
    </Pressable>
  );
}
