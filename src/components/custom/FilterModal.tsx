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
    setRatingCategory("5");
    setPriceRange([10, 18]);
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
      <View
        style={{
          backgroundColor: "#FFFFE3",
          borderTopLeftRadius: scale(30),
          borderTopRightRadius: scale(30),
          paddingHorizontal: scale(20),
          paddingTop: scale(20),
          paddingBottom: scale(20),
        }}
      >
        {/* Handle */}
        <View
          style={{
            width: scale(60),
            height: scale(5),
            backgroundColor: "#C2A26F",
            borderRadius: scale(5) / 2,
            alignSelf: "center",
            marginBottom: scale(20),
          }}
        />

        {/* Title */}
        <View style={{ alignSelf: "center", marginBottom: scale(20) }}>
          <HeadingTitle size={scale(20)} title="Sort and filters" />
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
        <View style={{ marginTop: scale(20) }}>
          <HeadingTitle size={scale(20)} title="Price" />

          <MultiSlider
            values={priceRange}
            min={0}
            max={50}
            step={1}
            sliderLength={scale(300)}
            onValuesChange={(values) => setPriceRange(values)}
            selectedStyle={{
              backgroundColor: "#1F1500",
              height: scale(4),
            }}
            unselectedStyle={{
              backgroundColor: "#E5D6B8",
              height: scale(4),
            }}
            trackStyle={{
              height: scale(4),
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

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text
              style={{ fontSize: scale(14) }}
              className="font-[poppins-medium] text-[#1F1500]"
            >
              ${priceRange[0].toFixed(2)}
            </Text>

            <Text
              style={{ fontSize: scale(14) }}
              className="font-[poppins-medium] text-[#1F1500]"
            >
              ${priceRange[1].toFixed(2)}
            </Text>
          </View>
        </View>

        {/* Short by heading */}
        <View style={{ marginTop: scale(20) }}>
          <HeadingTitle size={scale(20)} title="Short by" />
        </View>

        {/* Short by */}
        <FilterCategories
          options={SHORT_BY_CATEGORY}
          selectedValue={selectedShortByCategory}
          onSelect={setSelectedShortByCategory}
        />

        {/* Rating title */}

        <View style={{ marginTop: scale(20) }}>
          <HeadingTitle size={scale(20)} title="Rating" />
        </View>

        {/* Rating */}
        <FilterCategories
          options={RATING_CATEGORIES}
          selectedValue={ratingCategory}
          onSelect={setRatingCategory}
          showStar
        />

        {/* Buttons */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: scale(40),
          }}
        >
          <Pressable
            onPress={handleReset}
            style={{
              flex: 1,
              height: scale(52),
              borderWidth: scale(1),
              borderStyle: "dashed",
              borderColor: "#1F1500",
              borderRadius: scale(999),
              alignItems: "center",
              justifyContent: "center",
              marginRight: scale(12),
            }}
          >
            <Text className="font-[poppins-medium] text-[#1F1500]">Reset</Text>
          </Pressable>

          <Pressable
            onPress={handleApply}
            style={{
              flex: 1,
              height: scale(52),
              backgroundColor: "#F7BC5D",
              borderWidth: scale(1),
              borderColor: "#1F1500",
              borderRadius: scale(999),
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text className="font-[poppins-medium] text-[#1F1500]">Apply</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default FilterModal;
