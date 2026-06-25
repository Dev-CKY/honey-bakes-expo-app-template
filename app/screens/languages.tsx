import arrowLeft from "@/src/assets/icons/svg/arrowLeft";
import HeadingTitle from "@/src/components/custom/HeadingTitle";
import IconButtonWrapper from "@/src/components/custom/IconButtonWrapper";
import LanguageCard from "@/src/components/custom/LanguageCard";
import { LANGUAGES_ITEMS } from "@/src/data/languages.data";
import styles from "@/src/styles/screens/languages.styles";
import { router } from "expo-router";
import React, { useState } from "react";
import { FlatList, View } from "react-native";

const Languages = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>(
    LANGUAGES_ITEMS[0].id,
  );

  const handleSelect = (id: string) => {
    setSelectedLanguage(id);
  };

  return (
    <View style={styles.container}>
      <IconButtonWrapper icon={arrowLeft} onPress={() => router.back()} />

      <View style={styles.headingContainer}>
        <HeadingTitle size={32} title="Languages" />
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={LANGUAGES_ITEMS}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.contentContainer}
        renderItem={({ item }) => (
          <LanguageCard
            language={item.language}
            image={item.image}
            selected={selectedLanguage === item.id}
            onPress={() => handleSelect(item.id)}
          />
        )}
      />
    </View>
  );
};

export default Languages;
