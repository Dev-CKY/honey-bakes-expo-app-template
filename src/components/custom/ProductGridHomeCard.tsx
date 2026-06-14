import { PRODUCT_ITEMS } from "@/src/data/product-items.data";
import { router } from "expo-router";
import React from "react";
import { FlatList } from "react-native";
import { scale } from "react-native-size-matters";
import ProductGridCard from "./ProductGridCard";

const ProductGridHomeCard = () => {
  return (
    <FlatList
      data={PRODUCT_ITEMS}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingTop: scale(20),
        gap: scale(20),
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
  );
};

export default ProductGridHomeCard;
