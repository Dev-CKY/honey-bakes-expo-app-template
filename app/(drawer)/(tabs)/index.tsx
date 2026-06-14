import bell from "@/src/assets/icons/svg/bell";
import map from "@/src/assets/icons/svg/map";
import { BannerItem } from "@/src/components/custom/BannerItem";
import FilterCategories from "@/src/components/custom/FilterCategories";
import HeadingTitle from "@/src/components/custom/HeadingTitle";
import PaginationDot from "@/src/components/custom/PaginationDot";
import ProductGridHomeCard from "@/src/components/custom/ProductGridHomeCard";
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
        paddingBottom: tabBarHeight + 40,
      }}
    >
      {/* Header */}
      <ImageBackground
        className="w-full h-[300px] p-[20px] justify-between"
        source={require("@/src/assets/images/custom/home_bg.jpg")}
      >
        <View className="flex-row items-center justify-between">
          <Pressable
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          >
            <Image
              source={require("@/src/assets/images/custom/icons/avatar.png")}
              className="w-[44px] h-[44px] rounded-full"
            />
          </Pressable>

          <Pressable
            onPress={() => router.push("/screens/notifications")}
            className="w-[44px] h-[44px] rounded-full bg-[#FFFFE3] border border-[1.5px] items-center justify-center"
          >
            <SvgXml xml={bell} />
          </Pressable>
        </View>

        <View>
          <Text className="font-[kalnia-medium] text-[#1F1500] text-[32px]">
            Hello, Michel
          </Text>

          <View className="flex-row items-center gap-[5px]">
            <SvgXml xml={map} />

            <Text className="font-[poppins-regular] text-[16px] text-[#1F1500]">
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
      <View className="p-[20px]">
        <View className="flex-row items-end justify-between">
          <HeadingTitle size={20} title="Categories" />

          <Pressable onPress={() => router.push("/screens/categories")}>
            <Text className="font-[poppins-medium] text-[14px] text-[#1F1500]">
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
        <View className="my-[20px]">
          <Carousel
            loop
            autoPlay
            autoPlayInterval={4000}
            width={width - 40}
            height={220}
            pagingEnabled
            snapEnabled
            data={HOME_BANNERS}
            onSnapToItem={setActiveIndex}
            mode="parallax"
            modeConfig={{
              parallaxScrollingScale: 0.9,
              parallaxScrollingOffset: 80,
              parallaxAdjacentItemScale: 0.75,
            }}
            renderItem={({ item, animationValue }) => (
              <BannerItem item={item} animationValue={animationValue} />
            )}
          />

          {/* Pagination */}
          <View className="flex-row justify-center items-center mt-[12px]">
            {HOME_BANNERS.map((_, index) => (
              <PaginationDot key={index} active={activeIndex === index} />
            ))}
          </View>
        </View>

        {/* Popular */}
        <View className="flex-row items-end justify-between">
          <HeadingTitle title="Popular" size={20} />

          <Pressable onPress={() => router.push("/screens/products")}>
            <Text className="font-[poppins-medium] text-[14px] text-[#1F1500]">
              View all
            </Text>
          </Pressable>
        </View>

        <ProductGridHomeCard />

        {/* New Products */}
        <View className="flex-row items-end justify-between mt-[20px]">
          <HeadingTitle title="Our new products" size={20} />

          <Pressable onPress={() => router.push("/screens/products")}>
            <Text className="font-[poppins-medium] text-[14px] text-[#1F1500]">
              View all
            </Text>
          </Pressable>
        </View>

        <ProductGridHomeCard />

        <Image
          className="w-full h-[175px] rounded-[10px] my-[20px]"
          resizeMode="contain"
          source={require("@/src/assets/images/custom/banners/4.jpg")}
        />

        {/* Recently Viewed */}
        <View className="flex-row items-end justify-between">
          <HeadingTitle title="Recently viewed" size={20} />

          <Pressable onPress={() => router.push("/screens/products")}>
            <Text className="font-[poppins-medium] text-[14px] text-[#1F1500]">
              View all
            </Text>
          </Pressable>
        </View>

        <ProductGridHomeCard />
      </View>
    </ScrollView>
  );
};

export default Home;
