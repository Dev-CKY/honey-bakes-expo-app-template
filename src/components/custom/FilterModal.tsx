import { FILTER_CATEGORIES } from "@/src/data/filter-categories.data";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import Modal from "react-native-modal";
import { scale } from "react-native-size-matters";

import { RATING_CATEGORIES } from "@/src/data/rating-categories.data";
import { SHORT_BY_CATEGORY } from "@/src/data/short-by.data";
import FilterCategories from "./FilterCategories";
import HeadingTitle from "./HeadingTitle";

import styles from "../../styles/components/filterModal.styles";

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
      style={styles.modal}
    >
      <View style={styles.sheet}>
        {/* Handle */}
        <View style={styles.handle} />

        {/* Title */}
        <View style={styles.centerTitle}>
          <HeadingTitle size={scale(20)} title="Sort and filters" />
        </View>

        {/* Categories */}
        <View style={styles.categoriesTitleContainer}>
          <HeadingTitle size={20} title="Categories" />
        </View>

        {/* Categories tabs */}
        <FilterCategories
          options={FILTER_CATEGORIES}
          selectedValue={selectedCategory}
          onSelect={setSelectedCategory}
        />

        {/* Price */}
        <View style={styles.priceRow}>
          <HeadingTitle size={scale(20)} title="Price" />

          <MultiSlider
            values={priceRange}
            min={0}
            max={100}
            step={1}
            sliderLength={scale(300)}
            onValuesChange={(values) => setPriceRange(values)}
            selectedStyle={styles.sliderSelected}
            unselectedStyle={styles.sliderUnselected}
            trackStyle={styles.sliderTrack}
            markerStyle={styles.sliderMarker}
          />

          <View style={styles.priceValuesRow}>
            <Text style={styles.priceText}>${priceRange[0].toFixed(2)}</Text>

            <Text style={styles.priceText}>${priceRange[1].toFixed(2)}</Text>
          </View>
        </View>

        {/* Short by heading */}
        <View style={styles.section}>
          <HeadingTitle size={scale(20)} title="Short by" />
        </View>

        {/* Short by */}
        <FilterCategories
          options={SHORT_BY_CATEGORY}
          selectedValue={selectedShortByCategory}
          onSelect={setSelectedShortByCategory}
        />

        {/* Rating title */}
        <View style={styles.section}>
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
        <View style={styles.buttonsRow}>
          <Pressable onPress={handleReset} style={styles.resetButton}>
            <Text style={styles.buttonText}>Reset</Text>
          </Pressable>

          <Pressable onPress={handleApply} style={styles.applyButton}>
            <Text style={styles.buttonText}>Apply</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default FilterModal;
