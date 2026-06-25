import { router } from "expo-router";
import React from "react";
import { FlatList, Pressable, ScrollView, Text, View } from "react-native";
import Animated, {
  FadeIn,
  FadeInDown,
  LinearTransition,
} from "react-native-reanimated";
import { scale } from "react-native-size-matters";
import { SvgXml } from "react-native-svg";

import arrowLeft from "@/src/assets/icons/svg/arrowLeft";
import arrowTopRight from "@/src/assets/icons/svg/arrowTopRight";
import cross from "@/src/assets/icons/svg/cross";
import HeadingTitle from "@/src/components/custom/HeadingTitle";
import IconButtonWrapper from "@/src/components/custom/IconButtonWrapper";
import SearchBar from "@/src/components/custom/SearchBar";
import { RECENT_SEARCHES, TRENDING_SEARCHES } from "@/src/data/search.data";
import styles from "@/src/styles/screens/search.styles";

const SearchScreen = () => {
  return (
    <Animated.View entering={FadeIn.duration(250)} style={styles.container}>
      <View style={styles.horizontalPadding}>
        {/* Back button */}
        <IconButtonWrapper icon={arrowLeft} onPress={() => router.back()} />
      </View>

      <View style={styles.contentContainer}>
        {/* Search */}
        <Animated.View
          entering={FadeInDown.duration(400)}
          style={styles.searchRow}
        >
          <View style={styles.searchBarContainer}>
            <SearchBar placeholder="Search" />
          </View>

          <Pressable onPress={() => router.back()}>
            <Text style={styles.cancelText}>Cancel</Text>
          </Pressable>
        </Animated.View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* Recent Search */}
          <Animated.View
            entering={FadeInDown.delay(100).duration(450)}
            style={styles.sectionContainer}
          >
            <View style={styles.sectionHeader}>
              <HeadingTitle size={20} title="Recent searches" />

              <Pressable>
                <Text style={styles.clearAllText}>Clear all</Text>
              </Pressable>
            </View>

            <FlatList
              horizontal
              data={RECENT_SEARCHES}
              keyExtractor={(item) => item}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.recentSearchList}
              renderItem={({ item }) => (
                <Animated.View layout={LinearTransition.springify()}>
                  <Pressable style={styles.recentSearchChip}>
                    <Text style={styles.recentSearchText}>{item}</Text>

                    <SvgXml xml={cross} width={scale(16)} height={scale(16)} />
                  </Pressable>
                </Animated.View>
              )}
            />
          </Animated.View>

          {/* Trending */}
          <Animated.View
            entering={FadeInDown.delay(200).duration(500)}
            style={styles.sectionContainer}
          >
            <View style={styles.trendingHeader}>
              <HeadingTitle size={20} title="Trending" />
            </View>

            {TRENDING_SEARCHES.map((item, index) => (
              <Animated.View
                key={item.id}
                entering={FadeInDown.delay(250 + index * 50).duration(400)}
                layout={LinearTransition.springify()}
              >
                <Pressable style={styles.trendingItem}>
                  <View style={styles.trendingContent}>
                    <Text style={styles.trendingTitle}>{item.title}</Text>

                    <Text style={styles.trendingSubtitle}>
                      By {item.bakery}
                    </Text>
                  </View>

                  <SvgXml
                    xml={arrowTopRight}
                    width={scale(16)}
                    height={scale(16)}
                  />
                </Pressable>
              </Animated.View>
            ))}
          </Animated.View>
        </ScrollView>
      </View>
    </Animated.View>
  );
};

export default SearchScreen;
