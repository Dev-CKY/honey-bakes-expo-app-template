import arrowLeft from "@/src/assets/icons/svg/arrowLeft";
import CategoryCard from "@/src/components/custom/CategoryCard";
import HeadingTitle from "@/src/components/custom/HeadingTitle";
import IconButtonWrapper from "@/src/components/custom/IconButtonWrapper";
import { CATEGORIES_ITEMS } from "@/src/data/categories.data";
import styles from "@/src/styles/screens/categories.styles";
import { router } from "expo-router";
import React from "react";
import { FlatList, View } from "react-native";

const Categories = () => {
  return (
    <View style={styles.container}>
      {/* Back Button */}
      <IconButtonWrapper icon={arrowLeft} onPress={() => router.back()} />

      {/* Heading */}
      <View style={styles.headingContainer}>
        <HeadingTitle size={32} title="Categories" />
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={CATEGORIES_ITEMS}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.contentContainer}
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
