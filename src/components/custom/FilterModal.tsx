import { FILTER_CATEGORIES } from "@/src/data/filter-categories.data";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import Modal from "react-native-modal";

import { RATING_CATEGORIES } from "@/src/data/rating-categories.data";
import { SHORT_BY_CATEGORY } from "@/src/data/short-by.data";
import { scale } from "react-native-size-matters";
import FilterCategories from "./FilterCategories";
import HeadingTitle from "./HeadingTitle";

type Props = {
  isVisible: boolean;
  onClose: () => void;
  onApply?: (category: string) => void;
};

const FilterModal = ({ isVisible, onClose, onApply }: Props) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedShortByCategory, setSelectedShortByCategory] = useState("All");
  const [ratingCategory, setRatingCategory] = useState("5");

  const [priceRange, setPriceRange] = useState([10, 18]);

  const handleReset = () => {
    setSelectedCategory("All");
    setSelectedShortByCategory("All");
    (setRatingCategory("5"), setPriceRange([10, 18]));
  };

  const handleApply = () => {
    onApply?.(selectedCategory);
    onClose();
  };

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      swipeDirection="down"
      onSwipeComplete={onClose}
      style={{
        justifyContent: "flex-end",
        margin: 0,
      }}
    >
      <View className="bg-[#FFFFE3] rounded-t-[30px] px-[20px] pt-[20px] pb-[20px]">
        {/* Handle */}
        <View className="w-[60px] h-[5px] bg-[#C2A26F] rounded-full self-center mb-[20px]" />

        {/* Title */}
        <View className="self-center mb-[20px]">
          <HeadingTitle size={20} title="Sort and filters" />
        </View>

        {/* Categories */}
        <HeadingTitle size={20} title="Categories" />

        {/* Categories tabs */}
        <FilterCategories
          options={FILTER_CATEGORIES}
          selectedValue={selectedCategory}
          onSelect={setSelectedCategory}
        />

        {/* Price */}
        <View className="mt-[20px]">
          <HeadingTitle size={20} title="Price" />

          <MultiSlider
            values={priceRange}
            min={0}
            max={50}
            step={1}
            sliderLength={300}
            onValuesChange={(values) => setPriceRange(values)}
            selectedStyle={{
              backgroundColor: "#1F1500",
              height: 4,
            }}
            unselectedStyle={{
              backgroundColor: "#E5D6B8",
              height: 4,
            }}
            trackStyle={{
              height: 4,
            }}
            markerStyle={{
              width: scale(20),
              height: scale(20),
              borderRadius: 999,
              backgroundColor: "#1F1500",
              borderWidth: scale(3),
              borderColor: "#7c7c7c",
            }}
          />

          <View className="flex-row justify-between">
            <Text className="font-[poppins-medium] text-[#1F1500] text-[14px]">
              ${priceRange[0].toFixed(2)}
            </Text>

            <Text className="font-[poppins-medium] text-[#1F1500] text-[14px]">
              ${priceRange[1].toFixed(2)}
            </Text>
          </View>
        </View>

        {/* Short by heading */}
        <View className="mt-[20px]">
          <HeadingTitle size={20} title="Short by" />
        </View>

        {/* Short by */}
        <FilterCategories
          options={SHORT_BY_CATEGORY}
          selectedValue={selectedShortByCategory}
          onSelect={setSelectedShortByCategory}
        />

        {/* Rating title */}

        <View className="mt-[20px]">
          <HeadingTitle size={20} title="Rating" />
        </View>

        {/* Rating */}
        <FilterCategories
          options={RATING_CATEGORIES}
          selectedValue={ratingCategory}
          onSelect={setRatingCategory}
          showStar
        />

        {/* Buttons */}
        <View className="flex-row justify-between mt-[40px]">
          <Pressable
            onPress={handleReset}
            className="flex-1 h-[52px] border border-dashed border-[#1F1500] rounded-full items-center justify-center mr-[12px]"
          >
            <Text className="font-[poppins-medium] text-[#1F1500]">Reset</Text>
          </Pressable>

          <Pressable
            onPress={handleApply}
            className="flex-1 h-[52px] bg-[#F7BC5D] border border-[#1F1500] rounded-full items-center justify-center"
          >
            <Text className="font-[poppins-medium] text-[#1F1500]">Apply</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default FilterModal;
