import bell from "@/src/assets/icons/svg/bell";
import map from "@/src/assets/icons/svg/map";
import { BannerItem } from "@/src/components/custom/BannerItem";
import FilterCategories from "@/src/components/custom/FilterCategories";
import HeadingTitle from "@/src/components/custom/HeadingTitle";
import HorizontalProductsFlatlist from "@/src/components/custom/HorizontalProductsFlatlist";
import PaginationDot from "@/src/components/custom/PaginationDot";
import SearchBar from "@/src/components/custom/SearchBar";
import { FILTER_CATEGORIES } from "@/src/data/filter-categories.data";
import { HOME_BANNERS } from "@/src/data/home-banner.data";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { DrawerActions } from "@react-navigation/native";
import { router, useNavigation } from "expo-router";
import React, { useState } from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { scale } from "react-native-size-matters";
import { SvgXml } from "react-native-svg";

const { width } = Dimensions.get("window");

const Home = () => {
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeIndex, setActiveIndex] = useState(0);

  const tabBarHeight = useBottomTabBarHeight();

  return (
    <ScrollView
      className="flex-1 bg-[#FFFFE3]"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingBottom: tabBarHeight + scale(40),
      }}
    >
      {/* Header */}
      <ImageBackground
        className="w-full justify-center"
        style={{ height: scale(275), padding: scale(20), gap: scale(30) }}
        source={require("@/src/assets/images/custom/home_bg.jpg")}
      >
        <View className="flex-row items-center justify-between">
          <Pressable
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          >
            <Image
              source={require("@/src/assets/images/custom/icons/avatar.png")}
              className="rounded-full"
              style={{ width: scale(44), height: scale(44) }}
            />
          </Pressable>

          <Pressable
            onPress={() => router.push("/screens/notifications")}
            className="rounded-full bg-[#FFFFE3] border items-center justify-center"
            style={{
              width: scale(44),
              height: scale(44),
              borderWidth: scale(1.5),
            }}
          >
            <SvgXml xml={bell} width={scale(24)} height={scale(24)} />
          </Pressable>
        </View>

        <View>
          <Text
            className="font-[kalnia-medium] text-[#1F1500]"
            style={{ fontSize: scale(32) }}
          >
            Hello, Michel
          </Text>

          <View className="flex-row items-center" style={{ gap: scale(5) }}>
            <SvgXml xml={map} />

            <Text
              className="font-[poppins-regular] text-[#1F1500]"
              style={{ fontSize: scale(14) }}
            >
              New York, NY, USA
            </Text>
          </View>
        </View>

        <Pressable onPress={() => router.push("/screens/search")}>
          <View pointerEvents="none">
            <SearchBar placeholder="Search what you wanna eat" />
          </View>
        </Pressable>
      </ImageBackground>

      {/* Body */}
      <View style={{ paddingVertical: scale(20) }}>
        <View
          className="flex-row items-end justify-between"
          style={{ paddingHorizontal: scale(20) }}
        >
          <HeadingTitle size={20} title="Categories" />

          <Pressable onPress={() => router.push("/screens/categories")}>
            <Text
              className="font-[poppins-medium]  text-[#1F1500]"
              style={{ fontSize: scale(14) }}
            >
              View all
            </Text>
          </Pressable>
        </View>

        <FilterCategories
          options={FILTER_CATEGORIES}
          selectedValue={selectedCategory}
          onSelect={setSelectedCategory}
        />

        {/* Premium Carousel */}
        <View style={{ marginVertical: scale(20) }}>
          <Carousel
            loop
            autoPlay
            autoPlayInterval={4000}
            width={width}
            height={scale(155)}
            pagingEnabled
            snapEnabled
            data={HOME_BANNERS}
            onSnapToItem={setActiveIndex}
            renderItem={({ item }) => <BannerItem item={item} />}
          />

          {/* Pagination */}
          <View
            className="flex-row justify-center items-center"
            style={{ marginTop: scale(12) }}
          >
            {HOME_BANNERS.map((_, index) => (
              <PaginationDot key={index} active={activeIndex === index} />
            ))}
          </View>
        </View>

        {/* Popular */}
        <View
          className="flex-row items-end justify-between"
          style={{ paddingHorizontal: scale(20) }}
        >
          <HeadingTitle title="Popular" size={20} />

          <Pressable onPress={() => router.push("/screens/products")}>
            <Text
              className="font-[poppins-medium] text-[#1F1500]"
              style={{ fontSize: scale(14) }}
            >
              View all
            </Text>
          </Pressable>
        </View>

        <HorizontalProductsFlatlist />

        {/* New Products */}
        <View
          className="flex-row items-end justify-between"
          style={{ paddingHorizontal: scale(20), marginTop: scale(20) }}
        >
          <HeadingTitle title="Our new products" size={20} />

          <Pressable onPress={() => router.push("/screens/products")}>
            <Text
              className="font-[poppins-medium] text-[#1F1500]"
              style={{ fontSize: scale(14) }}
            >
              View all
            </Text>
          </Pressable>
        </View>

        <HorizontalProductsFlatlist />

        <View
          className="w-full"
          style={{
            height: scale(155),
            marginVertical: scale(20),
            paddingHorizontal: scale(20),
          }}
        >
          <Image
            className="w-full h-full"
            style={{ borderRadius: scale(10) }}
            source={require("@/src/assets/images/custom/banners/4.jpg")}
          />
        </View>

        {/* Recently Viewed */}
        <View
          className="flex-row items-end justify-between"
          style={{ paddingHorizontal: scale(20) }}
        >
          <HeadingTitle title="Recently viewed" size={20} />

          <Pressable onPress={() => router.push("/screens/products")}>
            <Text
              className="font-[poppins-medium] text-[#1F1500]"
              style={{ fontSize: scale(14) }}
            >
              View all
            </Text>
          </Pressable>
        </View>

        <HorizontalProductsFlatlist />
      </View>
    </ScrollView>
  );
};

export default Home;
