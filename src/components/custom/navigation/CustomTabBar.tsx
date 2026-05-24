import type { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import React, { useEffect } from "react";
import { View } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { moderateScale } from "react-native-size-matters";

import { TAB_ICONS } from "@/src/config/tabs";
import { TAB_BAR_COLORS, TAB_BAR_SIZES } from "@/src/constants/tab-bar";

import { TabButton } from "./TabButton";

// ======================================================
// Types
// ======================================================

type AnimatedTabButtonProps = {
  icon: string;
  focused: boolean;
  onPress: () => void;
  onLongPress: () => void;
  accessibilityLabel?: string;
  testID?: string;
};

// ======================================================
// Custom Tab Bar
// ======================================================

export function CustomTabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  const insets = useSafeAreaInsets();

  return (
    <View
      pointerEvents="box-none"
      className="absolute left-0 right-0 items-center"
      style={{
        bottom: Math.max(moderateScale(18), insets.bottom + moderateScale(8)),
      }}
    >
      <View
        className="flex-row items-center justify-between rounded-full px-2"
        style={{
          width: "78%",
          height: TAB_BAR_SIZES.height,
          backgroundColor: TAB_BAR_COLORS.background,
        }}
      >
        {TAB_ICONS.map((tab) => {
          const route = state.routes.find((item) => item.name === tab.name);

          if (!route) return null;

          const isFocused = state.routes[state.index].name === route.name;

          const { options } = descriptors[route.key];

          // ======================================================
          // Press Handlers
          // ======================================================

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          return (
            <AnimatedTabButton
              key={route.key}
              icon={tab.icon}
              focused={isFocused}
              onPress={onPress}
              onLongPress={onLongPress}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarButtonTestID}
            />
          );
        })}
      </View>
    </View>
  );
}

// ======================================================
// Animated Tab Button
// ======================================================

function AnimatedTabButton({ focused, ...rest }: AnimatedTabButtonProps) {
  // ======================================================
  // Shared Value
  // ======================================================

  const progress = useSharedValue<number>(focused ? 1 : 0);

  // ======================================================
  // Animate Like Toggle Button
  // ======================================================

  useEffect(() => {
    progress.value = withSpring(focused ? 1 : 0, {
      damping: 25,
      stiffness: 120,
    });
  }, [focused]);

  // ======================================================
  // Animated Styles
  // ======================================================

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(progress.value, [0, 1], [0.55, 1]),

      transform: [
        {
          scale: interpolate(progress.value, [0, 1], [0.92, 1]),
        },
        {
          translateY: interpolate(progress.value, [0, 1], [2, 0]),
        },
      ],
    };
  });

  // ======================================================
  // Render
  // ======================================================

  return (
    <Animated.View style={animatedStyle}>
      <TabButton focused={focused} {...rest} />
    </Animated.View>
  );
}
