import starFilled from "@/src/assets/icons/svg/starFilled";
import starFilledBlack from "@/src/assets/icons/svg/starFilledBlack";
import React, { useEffect } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { SvgXml } from "react-native-svg";

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
};

const FilterChip = ({
  label,
  isSelected,
  onPress,
  showStar,
}: FilterChipProps) => {
  const opacity = useSharedValue(isSelected ? 1 : 0.8);
  const scale = useSharedValue(isSelected ? 1 : 0.95);

  useEffect(() => {
    opacity.value = withTiming(isSelected ? 1 : 0.8, {
      duration: 250,
    });

    scale.value = withSpring(isSelected ? 1 : 0.95, {
      damping: 15,
      stiffness: 180,
    });
  }, [isSelected]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ scale: scale.value }],
  }));

  return (
    <Animated.View style={animatedStyle}>
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
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="mt-[12px]"
      contentContainerStyle={{
        gap: 12,
        paddingRight: 20,
      }}
    >
      {options.map((item) => (
        <FilterChip
          key={item}
          label={item}
          isSelected={selectedValue === item}
          onPress={() => onSelect(item)}
          showStar={showStar}
        />
      ))}
    </ScrollView>
  );
};

export default FilterCategories;
