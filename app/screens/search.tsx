import React from "react";
import { FlatList, Pressable, ScrollView, Text, View } from "react-native";

import { router } from "expo-router";
import Animated, {
  FadeIn,
  FadeInDown,
  LinearTransition,
} from "react-native-reanimated";

import { RECENT_SEARCHES, TRENDING_SEARCHES } from "@/src/data/search.data";

import arrowLeft from "@/src/assets/icons/svg/arrowLeft";
import arrowTopRight from "@/src/assets/icons/svg/arrowTopRight";
import cross from "@/src/assets/icons/svg/cross";
import HeadingTitle from "@/src/components/custom/HeadingTitle";
import IconButtonWrapper from "@/src/components/custom/IconButtonWrapper";
import SearchBar from "@/src/components/custom/SearchBar";
import { scale } from "react-native-size-matters";
import { SvgXml } from "react-native-svg";

const SearchScreen = () => {
  return (
    <Animated.View
      entering={FadeIn.duration(250)}
      className="flex-1 bg-[#FFFFE3]"
      style={{ paddingTop: scale(20), backgroundColor: "#FFFFE3" }}
    >
      <View style={{ paddingHorizontal: scale(20) }}>
        {/* Back button */}
        <IconButtonWrapper icon={arrowLeft} onPress={() => router.back()} />
      </View>

      <View className="flex-1" style={{ paddingHorizontal: scale(20) }}>
        {/* Search */}
        <Animated.View
          entering={FadeInDown.duration(400)}
          className="flex-row items-center"
          style={{ gap: scale(12) }}
        >
          <View className="flex-1 w-full">
            <SearchBar placeholder="Search" />
          </View>

          <Pressable onPress={() => router.back()}>
            <Text
              className="font-[poppins-medium] text-[16px] text-[#1F1500]"
              style={{ fontSize: scale(16) }}
            >
              Cancel
            </Text>
          </Pressable>
        </Animated.View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: scale(20),
          }}
        >
          {/* Recent Search */}
          <Animated.View
            entering={FadeInDown.delay(100).duration(450)}
            style={{ marginTop: scale(20) }}
          >
            <View className="flex-row items-end justify-between">
              <HeadingTitle size={20} title="Recent searches" />

              <Pressable>
                <Text
                  style={{ fontSize: scale(14) }}
                  className="font-[poppins-medium] text-[#1F1500]"
                >
                  Clear all
                </Text>
              </Pressable>
            </View>

            <FlatList
              horizontal
              data={RECENT_SEARCHES}
              keyExtractor={(item) => item}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                gap: scale(12),
                marginTop: scale(20),
              }}
              renderItem={({ item }) => (
                <Animated.View layout={LinearTransition.springify()}>
                  <Pressable
                    className="rounded-full border border-[#DDD5B5] flex-row items-center justify-between"
                    style={{
                      height: scale(44),
                      paddingLeft: scale(20),
                      paddingRight: scale(10),
                      borderWidth: scale(1),
                      borderColor: "#DDD5B5",
                      borderRadius: scale(44) / 2,
                    }}
                  >
                    <Text
                      style={{ fontSize: scale(16) }}
                      className="font-[poppins-medium] text-[#1F1500]"
                    >
                      {item}
                    </Text>

                    <SvgXml xml={cross} width={scale(16)} height={scale(16)} />
                  </Pressable>
                </Animated.View>
              )}
            />
          </Animated.View>

          {/* Trending */}
          <Animated.View
            entering={FadeInDown.delay(200).duration(500)}
            style={{ marginTop: scale(20) }}
          >
            <View style={{ marginBottom: scale(10) }}>
              <HeadingTitle size={20} title="Trending" />
            </View>

            {TRENDING_SEARCHES.map((item, index) => (
              <Animated.View
                key={item.id}
                entering={FadeInDown.delay(250 + index * 50).duration(400)}
                layout={LinearTransition.springify()}
              >
                <Pressable
                  className="flex-row items-center justify-between"
                  style={{ paddingVertical: scale(10) }}
                >
                  <View className="flex-1">
                    <Text
                      className="font-[poppins-medium] text-[#1F1500]"
                      style={{ fontSize: scale(16) }}
                    >
                      {item.title}
                    </Text>

                    <Text
                      style={{ fontSize: scale(14) }}
                      className="font-[poppins-regular] text-[#C7A16A]"
                    >
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
