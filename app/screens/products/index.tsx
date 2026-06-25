import arrowLeft from "@/src/assets/icons/svg/arrowLeft";
import filter from "@/src/assets/icons/svg/filter";
import FilterModal from "@/src/components/custom/FilterModal";
import IconButtonWrapper from "@/src/components/custom/IconButtonWrapper";
import ProductGridCard from "@/src/components/custom/ProductGridCard";
import SearchBar from "@/src/components/custom/SearchBar";
import { PRODUCT_ITEMS } from "@/src/data/product-items.data";
import styles from "@/src/styles/screens/productGrid.styles";
import { router } from "expo-router";
import React, { useState } from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import { scale } from "react-native-size-matters";
import { SvgXml } from "react-native-svg";

const ProductGrid = () => {
  const [showFilterModal, setShowFilterModal] = useState(false);

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <IconButtonWrapper icon={arrowLeft} onPress={() => router.back()} />

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <SearchBar placeholder="Search products..." searchValue="Cake" />
        </View>

        <Pressable
          onPress={() => setShowFilterModal(true)}
          style={styles.filterButton}
        >
          <SvgXml xml={filter} width={scale(20)} height={scale(20)} />
        </Pressable>
      </View>

      <Text style={styles.resultsText}>
        Found {PRODUCT_ITEMS.length} results
      </Text>

      <FlatList
        data={PRODUCT_ITEMS}
        keyExtractor={(item) => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.flatListContent}
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
