import React, { useRef, useState } from "react";
import { FlatList } from "react-native";
import { scale } from "react-native-size-matters";
import FilterChip from "./FilterChip";

type Props = {
  options: string[];
  selectedValue: string;
  onSelect: (value: string) => void;
  showStar?: boolean;
};

const FilterCategories = ({
  options,
  selectedValue,
  onSelect,
  showStar = false,
}: Props) => {
  const ref = useRef<FlatList>(null);
  const [index, setIndex] = useState(0);

  const ITEM_WIDTH = scale(100);

  const handleSelect = (value: string, itemIndex: number) => {
    setIndex(itemIndex);
    onSelect(value);

    ref.current?.scrollToOffset({
      offset: Math.max(0, itemIndex * ITEM_WIDTH - ITEM_WIDTH * 1.5),
      animated: true,
    });
  };

  const renderItem = ({
    item,
    index: itemIndex,
  }: {
    item: string;
    index: number;
  }) => (
    <FilterChip
      label={item}
      isSelected={selectedValue === item}
      onPress={() => handleSelect(item, itemIndex)}
      showStar={showStar}
    />
  );

  return (
    <FlatList
      ref={ref}
      initialScrollIndex={index}
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{ marginTop: scale(20) }}
      contentContainerStyle={{
        gap: scale(10),
        paddingHorizontal: scale(20),
      }}
      data={options}
      renderItem={renderItem}
      keyExtractor={(item) => item}
    />
  );
};

export default FilterCategories;
