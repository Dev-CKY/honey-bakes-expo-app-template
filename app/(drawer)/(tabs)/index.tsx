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
import styles from "@/src/styles/screens/home.styles";
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
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: tabBarHeight + scale(40) }}
    >
      {/* Header */}
      <ImageBackground
        style={styles.headerBackground}
        source={require("@/src/assets/images/custom/home_bg.jpg")}
      >
        <View style={styles.headerRow}>
          <Pressable
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          >
            <Image
              source={require("@/src/assets/images/custom/icons/avatar.png")}
              style={styles.avatar}
            />
          </Pressable>

          <Pressable
            onPress={() => router.push("/screens/notifications")}
            style={styles.notificationButton}
          >
            <SvgXml xml={bell} width={scale(24)} height={scale(24)} />
          </Pressable>
        </View>

        <View>
          <Text style={styles.greetingText}>Hello, Michel</Text>

          <View style={styles.locationContainer}>
            <SvgXml xml={map} />

            <Text style={styles.locationText}>New York, NY, USA</Text>
          </View>
        </View>

        <Pressable onPress={() => router.push("/screens/search")}>
          <View pointerEvents="none">
            <SearchBar placeholder="Search what you wanna eat" />
          </View>
        </Pressable>
      </ImageBackground>

      {/* Body */}
      <View style={styles.body}>
        <View style={styles.sectionHeader}>
          <HeadingTitle size={20} title="Categories" />

          <Pressable onPress={() => router.push("/screens/categories")}>
            <Text style={styles.viewAllText}>View all</Text>
          </Pressable>
        </View>

        <FilterCategories
          options={FILTER_CATEGORIES}
          selectedValue={selectedCategory}
          onSelect={setSelectedCategory}
        />

        {/* Premium Carousel */}
        <View style={styles.carouselContainer}>
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
          <View style={styles.paginationContainer}>
            {HOME_BANNERS.map((_, index) => (
              <PaginationDot key={index} active={activeIndex === index} />
            ))}
          </View>
        </View>

        {/* Popular */}
        <View style={styles.sectionHeader}>
          <HeadingTitle title="Popular" size={20} />

          <Pressable onPress={() => router.push("/screens/products")}>
            <Text style={styles.viewAllText}>View all</Text>
          </Pressable>
        </View>

        <HorizontalProductsFlatlist />

        {/* New Products */}
        <View style={styles.sectionHeaderWithMargin}>
          <HeadingTitle title="Our new products" size={20} />

          <Pressable onPress={() => router.push("/screens/products")}>
            <Text style={styles.viewAllText}>View all</Text>
          </Pressable>
        </View>

        <HorizontalProductsFlatlist />

        <View style={styles.bannerContainer}>
          <Image
            style={styles.bannerImage}
            source={require("@/src/assets/images/custom/banners/4.jpg")}
          />
        </View>

        {/* Recently Viewed */}
        <View style={styles.sectionHeader}>
          <HeadingTitle title="Recently viewed" size={20} />

          <Pressable onPress={() => router.push("/screens/products")}>
            <Text style={styles.viewAllText}>View all</Text>
          </Pressable>
        </View>

        <HorizontalProductsFlatlist />
      </View>
    </ScrollView>
  );
};

export default Home;
