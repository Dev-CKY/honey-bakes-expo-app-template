import starFilled from "@/src/assets/icons/svg/starFilled";
import starFilledBlack from "@/src/assets/icons/svg/starFilledBlack";
import React, { useEffect, useRef } from "react";
import { Pressable, Text, View } from "react-native";
import Animated, {
  Easing,
  scrollTo,
  useAnimatedRef,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { SvgXml } from "react-native-svg";
import { scheduleOnUI } from "react-native-worklets";

type Props = {
  options: string[];
  selectedValue: string;
  onSelect: (value: string) => void;
  showStar?: boolean;
};

type FilterChipProps = {
  label: string;
  isSelected: boolean;
  onPress: () => void;
  showStar?: boolean;
  onLayout?: (event: any) => void;
  setComponentRef?: (ref: any, label: string) => void;
};

const FilterChip = ({
  label,
  isSelected,
  onPress,
  showStar,
  onLayout,
}: FilterChipProps) => {
  const opacity = useSharedValue(isSelected ? 1 : 0.7);
  const scale = useSharedValue(isSelected ? 1 : 0.97);

  useEffect(() => {
    opacity.value = withTiming(isSelected ? 1 : 0.7, {
      duration: 180,
      easing: Easing.out(Easing.cubic),
    });

    scale.value = withSpring(isSelected ? 1 : 0.98, {
      damping: 18,
      stiffness: 220,
    });
  }, [isSelected, opacity, scale]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ scale: scale.value }],
  }));

  return (
    <Animated.View style={animatedStyle} onLayout={onLayout}>
      <Pressable
        onPress={onPress}
        className={`px-[20px] h-[44px] rounded-full items-center justify-center border ${
          isSelected ? "bg-[#F7BC5D] border-[#1F1500]" : "border-[#E5D6B8]"
        }`}
      >
        <View className="flex-row items-center gap-[4px]">
          <Text
            className={`${
              isSelected
                ? "text-[#1F1500] font-[poppins-medium]"
                : "text-[#6B6B6B]"
            }`}
          >
            {label}
          </Text>

          {showStar && (
            <SvgXml xml={isSelected ? starFilledBlack : starFilled} />
          )}
        </View>
      </Pressable>
    </Animated.View>
  );
};

const FilterCategories = ({
  options,
  selectedValue,
  onSelect,
  showStar = false,
}: Props) => {
  const scrollViewRef = useAnimatedRef<Animated.ScrollView>();
  const itemPositions = useRef<Map<string, number>>(new Map());
  const scrollViewWidth = useRef<number>(0);
  const isFirstRender = useRef(true);

  const handleItemLayout = (label: string) => (event: any) => {
    const layout = event.nativeEvent.layout;
    itemPositions.current.set(label, layout.x);

    // Center the initially selected item on first render
    if (isFirstRender.current && selectedValue === label) {
      isFirstRender.current = false;
      setTimeout(() => {
        scrollToCenterAnimated(selectedValue);
      }, 200);
    }
  };

  const scrollToCenterAnimated = (label: string) => {
    const itemX = itemPositions.current.get(label);
    if (itemX === undefined || scrollViewWidth.current === 0) return;

    scheduleOnUI(() => {
      "worklet";

      const itemLayout = itemPositions.current.get(label);
      if (itemLayout === undefined) return;

      const estimatedItemWidth = 200;
      const itemCenter = itemLayout + estimatedItemWidth;
      const targetOffset = itemCenter - scrollViewWidth.current;

      scrollTo(scrollViewRef, Math.max(0, targetOffset), 0, true);
    });
  };

  const handleSelect = (value: string) => {
    onSelect(value);
    setTimeout(() => {
      scrollToCenterAnimated(value);
    }, 100);
  };

  const onScrollViewLayout = (event: any) => {
    scrollViewWidth.current = event.nativeEvent.layout.width;

    if (selectedValue) {
      setTimeout(() => {
        scrollToCenterAnimated(selectedValue);
      }, 150);
    }
  };

  return (
    <Animated.ScrollView
      ref={scrollViewRef}
      horizontal
      showsHorizontalScrollIndicator={false}
      className="mt-[12px]"
      contentContainerStyle={{
        gap: 12,
      }}
      onLayout={onScrollViewLayout}
    >
      {options.map((item) => (
        <FilterChip
          key={item}
          label={item}
          isSelected={selectedValue === item}
          onPress={() => handleSelect(item)}
          showStar={showStar}
          onLayout={handleItemLayout(item)}
        />
      ))}
    </Animated.ScrollView>
  );
};

export default FilterCategories;
