import arrowLeft from "@/src/assets/icons/svg/arrowLeft";
import filter from "@/src/assets/icons/svg/filter";
import FilterModal from "@/src/components/custom/FilterModal";
import IconButtonWrapper from "@/src/components/custom/IconButtonWrapper";
import ProductGridCard from "@/src/components/custom/ProductGridCard";
import SearchBar from "@/src/components/custom/SearchBar";
import { PRODUCT_ITEMS } from "@/src/data/product-items.data";
import { router } from "expo-router";
import React, { useState } from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import { scale } from "react-native-size-matters";
import { SvgXml } from "react-native-svg";

const ProductGrid = () => {
  const [showFilterModal, setShowFilterModal] = useState(false);

  return (
    <View className="flex-1 bg-[#FFFFE3] px-[20px] pt-[20px]">
      {/* Back Button */}
      <IconButtonWrapper icon={arrowLeft} onPress={() => router.back()} />

      {/* Search Bar */}
      <View className="flex-row items-start justify-between">
        <View className="flex-1 mr-[12px]">
          <SearchBar placeholder="Search products..." searchValue="Cake" />
        </View>

        <Pressable
          onPress={() => setShowFilterModal(true)}
          className="w-[50px] h-[50px] rounded-full bg-[#F7BC5D] border-[1.5px] border-[#1F1500] items-center justify-center"
        >
          <SvgXml xml={filter} />
        </Pressable>
      </View>

      <Text className="text-[14px] text-[#C2A26F] mt-[12px] mb-[20px]">
        Found {PRODUCT_ITEMS.length} results
      </Text>

      <FlatList
        data={PRODUCT_ITEMS}
        keyExtractor={(item) => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{
          gap: scale(12),
          marginBottom: scale(20),
        }}
        contentContainerStyle={{
          paddingBottom: scale(30),
        }}
        renderItem={({ item }) => (
          <ProductGridCard
            title={item.title}
            image={item.image}
            price={item.price}
            brand={item.brand}
            onPress={() =>
              router.push({
                pathname: "/screens/products/product",
                params: {
                  id: item.id,
                },
              })
            }
          />
        )}
      />

      <FilterModal
        isVisible={showFilterModal}
        onClose={() => setShowFilterModal(false)}
      />
    </View>
  );
};
export default ProductGrid;
