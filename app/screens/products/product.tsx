import { router } from "expo-router";
import React from "react";
import {
  FlatList,
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { scale } from "react-native-size-matters";
import { SvgXml } from "react-native-svg";

import { useProductDetails } from "@/hooks/custom/useProductDetails";

import arrowLeft from "@/src/assets/icons/svg/arrowLeft";
import heart from "@/src/assets/icons/svg/heart";
import minus from "@/src/assets/icons/svg/minus";
import plus from "@/src/assets/icons/svg/plus";
import starEmpty from "@/src/assets/icons/svg/starEmpty";
import starFilled from "@/src/assets/icons/svg/starFilled";

import HeadingTitle from "@/src/components/custom/HeadingTitle";
import IconButtonWrapper from "@/src/components/custom/IconButtonWrapper";
import AnimatedQuantity from "@/src/components/custom/QuantitySelector";

import styles, {
  NON_VEG_COLOR,
  VEG_COLOR,
} from "@/src/styles/screens/productDetails.styles";

const ProductDetails = () => {
  const {
    product,
    isVeg,
    stars,
    quantity,
    totalPrice,
    increaseQuantity,
    decreaseQuantity,
  } = useProductDetails();

  const plusScale = useSharedValue(1);
  const minusScale = useSharedValue(1);

  const plusStyle = useAnimatedStyle(() => ({
    transform: [{ scale: plusScale.value }],
  }));

  const minusStyle = useAnimatedStyle(() => ({
    transform: [{ scale: minusScale.value }],
  }));

  const onIncrease = () => {
    plusScale.value = 0.85;
    plusScale.value = withSpring(1, {
      damping: 8,
      stiffness: 250,
    });
    increaseQuantity();
  };

  const onDecrease = () => {
    minusScale.value = 0.85;
    minusScale.value = withSpring(1, {
      damping: 8,
      stiffness: 250,
    });
    decreaseQuantity();
  };

  if (!product) {
    return null;
  }

  const renderStar = ({ id, filled }: { id: any; filled: boolean }) => (
    <SvgXml
      key={id}
      xml={filled ? starFilled : starEmpty}
      width={scale(14)}
      height={scale(14)}
      style={{ marginRight: scale(2) }}
    />
  );

  const renderIngredient = ({
    item,
  }: {
    item: (typeof product.ingredients)[number];
  }) => (
    <View style={styles.ingredientItem}>
      <View style={styles.ingredientImageWrapper}>
        <Image
          source={item.image}
          style={styles.ingredientImage}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.ingredientName}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Hero Image */}
        <ImageBackground
          source={product.image}
          resizeMode="cover"
          style={styles.heroImage}
        >
          <View style={styles.headerRow}>
            <View style={styles.backButtonWrapper}>
              <IconButtonWrapper
                icon={arrowLeft}
                onPress={() => {
                  router.back();
                }}
              />
            </View>

            <Pressable style={styles.favoriteButton}>
              <SvgXml xml={heart} width={scale(20)} height={scale(20)} />
            </Pressable>
          </View>
        </ImageBackground>

        {/* Quantity Controls */}
        <View style={styles.quantityContainer}>
          <Animated.View style={minusStyle}>
            <Pressable onPress={onDecrease} style={styles.quantityButton}>
              <SvgXml xml={minus} width={scale(16)} height={scale(16)} />
            </Pressable>
          </Animated.View>

          <AnimatedQuantity value={quantity} />

          <Animated.View style={plusStyle}>
            <Pressable
              onPress={onIncrease}
              style={[styles.quantityButton, styles.plusButton]}
            >
              <SvgXml xml={plus} width={scale(16)} height={scale(16)} />
            </Pressable>
          </Animated.View>
        </View>

        {/* Product Details */}
        <View style={styles.detailsContainer}>
          <View style={styles.titleRow}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{product.title}</Text>

              <Text style={styles.brand}>By {product.brand}</Text>
            </View>

            <View
              style={[
                styles.foodTypeBadge,
                {
                  backgroundColor: isVeg ? VEG_COLOR : NON_VEG_COLOR,
                },
              ]}
            >
              <Text style={styles.foodTypeText}>{product.foodType}</Text>
            </View>
          </View>

          {/* Rating */}
          <View style={styles.ratingContainer}>
            <View style={styles.starsRow}>{stars.map(renderStar)}</View>

            <Text style={styles.ratingText}>
              {product.rating.toFixed(1)} ({product.reviews.toLocaleString()})
            </Text>
          </View>

          {/* About */}
          <View style={styles.sectionContainer}>
            <HeadingTitle title="About" size={20} />

            <Text style={styles.description}>{product.description}</Text>
          </View>

          {/* Ingredients */}
          <View style={styles.sectionContainer}>
            <HeadingTitle title="Ingredients" size={20} />
          </View>

          <FlatList
            horizontal
            data={product.ingredients}
            renderItem={renderIngredient}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.ingredientsList}
          />
        </View>
      </ScrollView>

      {/* Bottom Price Bar */}
      <View style={styles.bottomBar}>
        <View style={styles.priceContainer}>
          <Text style={styles.oldPrice}>{product.oldPrice}</Text>

          <Text style={styles.totalPrice}>{totalPrice}</Text>
        </View>

        <View style={styles.addToCartButton}>
          <Text style={styles.addToCartText}>Add to cart</Text>
        </View>
      </View>
    </View>
  );
};

export default ProductDetails;
