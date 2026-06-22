import arrowLeft from "@/src/assets/icons/svg/arrowLeft";
import HeadingTitle from "@/src/components/custom/HeadingTitle";
import IconButtonWrapper from "@/src/components/custom/IconButtonWrapper";
import LanguageCard from "@/src/components/custom/LanguageCard";
import { LANGUAGES_ITEMS } from "@/src/data/languages.data";
import { router } from "expo-router";
import React, { useState } from "react";
import { FlatList, View } from "react-native";
import { scale } from "react-native-size-matters";

const Languages = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>(
    LANGUAGES_ITEMS[0].id,
  );

  const handleSelect = (id: string) => {
    setSelectedLanguage(id);
  };

  return (
    <View className="flex-1 bg-[#FFFFE3]" style={{ padding: scale(20) }}>
      <IconButtonWrapper icon={arrowLeft} onPress={() => router.back()} />

      <View style={{ marginBottom: scale(20) }}>
        <HeadingTitle size={32} title="Languages" />
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={LANGUAGES_ITEMS}
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
