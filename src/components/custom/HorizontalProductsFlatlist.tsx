import { PRODUCT_ITEMS } from "@/src/data/product-items.data";
import { router } from "expo-router";
import React from "react";
import { FlatList } from "react-native";
import styles from "../../styles/components/horizontalProductsFlatlist.styles";
import ProductGridCard from "./ProductGridCard";

const HorizontalProductsFlatlist = () => {
  return (
    <FlatList
      data={PRODUCT_ITEMS}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.contentContainer}
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
  );
};

export default HorizontalProductsFlatlist;
