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
import { useCartContext } from "@/src/context/CartContext";

// Food type badge colors
const VEG_COLOR = "#00CF21";
const NON_VEG_COLOR = "#F7715D";

const ProductDetails = () => {
  // Product details and quantity management
  const {
    product,
    isVeg,
    stars,
    quantity,
    totalPrice,
    increaseQuantity,
    decreaseQuantity,
  } = useProductDetails();

  // Access cart context to manage cart actions
  const { addToCart } = useCartContext();

  // Prevent rendering until product data is available
  if (!product) {
    return null;
  }

  // Navigate back to previous screen
  const handleGoBack = () => {
    router.back();
  };

  // Navigate to add to cart screen
  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.title,
      seller: product.brand,
      image: product.image,
      price: product.price,
      quantity,
    });

    router.push("/(drawer)/(tabs)/cart");
  };

  // Render individual rating star
  const renderStar = ({ id, filled }: { id: any; filled: boolean }) => (
    <SvgXml
      key={id}
      xml={filled ? starFilled : starEmpty}
      style={{ marginRight: scale(2) }}
    />
  );

  // Render individual ingredient item
  const renderIngredient = ({
    item,
  }: {
    item: (typeof product.ingredients)[number];
  }) => (
    <View className="mr-[18px] items-center">
      <View className="h-[72px] w-[72px] items-center justify-center rounded-full bg-[#F6F0D4]">
        <Image
          source={item.image}
          className="h-[35px] w-[35px]"
          resizeMode="contain"
        />
      </View>

      <Text className="mt-[8px] font-[poppins-medium] text-[#1F1500]">
        {item.name}
      </Text>
    </View>
  );

  return (
    <View className="flex-1 bg-[#FFFFE3]">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Product Hero Section */}
        <ImageBackground
          source={product.image}
          resizeMode="cover"
          className="h-[280px] px-[20px] pt-[20px]"
        >
          {/* Navigation & Wishlist Actions */}
          <View className="flex-row justify-between">
            <View className="h-[48px] w-[48px] rounded-full bg-white">
              <IconButtonWrapper icon={arrowLeft} onPress={handleGoBack} />
            </View>

            <Pressable className="h-[50px] w-[50px] items-center justify-center rounded-full border-[1.5px] border-[#1F1500] bg-[#F7BC5D]">
              <SvgXml xml={heart} />
            </Pressable>
          </View>
        </ImageBackground>

        {/* Quantity Control */}
        <View className="mt-[-25px] h-[50px] w-[120px] self-center rounded-full bg-[#F6F0D4] px-[5px] z-10 flex-row items-center justify-between">
          <Pressable
            onPress={decreaseQuantity}
            className="h-[30px] w-[30px] items-center justify-center rounded-full bg-white"
          >
            <SvgXml xml={minus} />
          </Pressable>

          <Text className="font-[poppins-medium] text-[14px]">{quantity}</Text>

          <Pressable
            onPress={increaseQuantity}
            className="h-[30px] w-[30px] items-center justify-center rounded-full border-[1.5px] border-[#1F1500] bg-[#F7BC5D]"
          >
            <SvgXml xml={plus} />
          </Pressable>
        </View>

        {/* Product Information */}
        <View className="mt-[20px] px-[20px]">
          {/* Product Header */}
          <View className="flex-row items-start justify-between">
            <View className="mr-[12px] flex-1">
              <Text className="mb-[2px] font-[poppins-medium] text-[20px] text-[#1F1500]">
                {product.title}
              </Text>

              <Text className="font-[poppins-regular] text-[14px] text-[#C2A26F]">
                By {product.brand}
              </Text>
            </View>

            {/* Food Type Badge */}
            <View
              className="h-[38px] items-center justify-center rounded-full px-[18px]"
              style={{
                backgroundColor: isVeg ? VEG_COLOR : NON_VEG_COLOR,
              }}
            >
              <Text className="font-[poppins-medium] text-white">
                {product.foodType}
              </Text>
            </View>
          </View>

          {/* Product Rating */}
          <View className="mb-[18px] mt-[8px] flex-row items-center">
            <View className="flex-row items-center">
              {stars.map(renderStar)}
            </View>

            <Text className="ml-[8px] font-[poppins-regular] text-[14px] text-[#8A8A8A]">
              {product.rating.toFixed(1)} ({product.reviews.toLocaleString()})
            </Text>
          </View>

          {/* Product Description */}
          <HeadingTitle title="About" size={20} />

          <Text className="mb-[18px] mt-[5px] font-[poppins-regular] text-[14px] leading-[28px] text-[#C2A26F]">
            {product.description}
          </Text>

          {/* Ingredients List */}
          <HeadingTitle title="Ingredients" size={20} />

          <FlatList
            horizontal
            data={product.ingredients}
            renderItem={renderIngredient}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingTop: scale(10),
            }}
          />
        </View>
      </ScrollView>

      {/* Sticky Bottom Checkout Bar */}
      <View className="my-[20px] h-[60px] w-[85%] self-center flex-row items-center justify-between rounded-full bg-[#F6F0D4]">
        {/* Pricing */}
        <View className="ml-[20px] flex-row items-center w-[40%]">
          <Text className="mt-[5px] font-[poppins-regular] text-[14px] text-[#757B7E] line-through">
            {product.oldPrice}
          </Text>

          <Text className="ml-[5px] font-[poppins-medium] text-[20px] text-[#1F1500]">
            {totalPrice}
          </Text>
        </View>

        {/* Order Action */}
        <Pressable
          onPress={handleAddToCart}
          className="h-[60px] w-[60%] items-center justify-center rounded-full border-[1.5px] border-[#1F1500] bg-[#F7BC5D]"
        >
          <Text className="font-[poppins-medium] text-[16px] text-[#1F1500]">
            Add to Cart
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ProductDetails;
