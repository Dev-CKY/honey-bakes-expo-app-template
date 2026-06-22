import arrowLeft from "@/src/assets/icons/svg/arrowLeft";
import CategoryCard from "@/src/components/custom/CategoryCard";
import HeadingTitle from "@/src/components/custom/HeadingTitle";
import IconButtonWrapper from "@/src/components/custom/IconButtonWrapper";
import { CATEGORIES_ITEMS } from "@/src/data/categories.data";
import { router } from "expo-router";
import React from "react";
import { FlatList, View } from "react-native";
import { scale } from "react-native-size-matters";

const Categories = () => {
  return (
    <View className="flex-1 bg-[#FFFFE3]" style={{ padding: scale(20) }}>
      {/* Back Button */}

      <IconButtonWrapper icon={arrowLeft} onPress={() => router.back()} />

      {/* Heading */}

      <View style={{ marginBottom: scale(20) }}>
        <HeadingTitle size={32} title="Categories" />
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={CATEGORIES_ITEMS}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{
          gap: scale(12),
          marginBottom: scale(20),
        }}
        contentContainerStyle={{
          paddingBottom: scale(30),
        }}
        renderItem={({ item }) => (
          <CategoryCard
            title={item.title}
            image={item.image}
            onPress={() => router.push("/screens/products")}
          />
        )}
      />
    </View>
  );
};

export default Categories;
