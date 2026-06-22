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
import AnimatedQuantity from "@/src/components/custom/QuantitySelector";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

const VEG_COLOR = "#00CF21";
const NON_VEG_COLOR = "#F7715D";

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
    <View style={{ marginRight: scale(18), alignItems: "center" }}>
      <View
        style={{
          height: scale(72),
          width: scale(72),
          alignItems: "center",
          justifyContent: "center",
          borderRadius: scale(36),
          backgroundColor: "#F6F0D4",
        }}
      >
        <Image
          source={item.image}
          style={{ height: scale(35), width: scale(35) }}
          resizeMode="contain"
        />
      </View>

      <Text
        style={{
          marginTop: scale(8),
          fontFamily: "poppins-medium",
          fontSize: scale(12),
          color: "#1F1500",
        }}
      >
        {item.name}
      </Text>
    </View>
  );

  return (
    <View className="flex-1 bg-[#FFFFE3]">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: scale(40),
        }}
      >
        {/* Hero Image */}
        <ImageBackground
          source={product.image}
          resizeMode="cover"
          style={{
            height: scale(280),
            paddingHorizontal: scale(20),
            paddingTop: scale(20),
          }}
        >
          <View className="flex-row justify-between">
            <View
              className="bg-white"
              style={{
                height: scale(48),
                width: scale(48),
                borderRadius: scale(24),
              }}
            >
              <IconButtonWrapper
                icon={arrowLeft}
                onPress={() => {
                  router.back();
                }}
              />
            </View>

            <Pressable
              className="items-center justify-center bg-[#F7BC5D]"
              style={{
                height: scale(50),
                width: scale(50),
                borderRadius: scale(25),
                borderWidth: scale(1.5),
                borderColor: "#1F1500",
              }}
            >
              <SvgXml xml={heart} width={scale(20)} height={scale(20)} />
            </Pressable>
          </View>
        </ImageBackground>

        {/* Quantity Controls */}
        <View
          className="z-10 self-center flex-row items-center justify-between bg-[#F6F0D4]"
          style={{
            marginTop: scale(-25),
            height: scale(55),
            width: scale(130),
            borderRadius: scale(27.5),
            paddingHorizontal: scale(6),
          }}
        >
          <Animated.View style={minusStyle}>
            <Pressable
              onPress={onDecrease}
              style={{
                height: scale(34),
                width: scale(34),
                borderRadius: scale(17),
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "white",
              }}
            >
              <SvgXml xml={minus} width={scale(16)} height={scale(16)} />
            </Pressable>
          </Animated.View>

          <AnimatedQuantity value={quantity} />

          <Animated.View style={plusStyle}>
            <Pressable
              onPress={onIncrease}
              style={{
                height: scale(34),
                width: scale(34),
                borderRadius: scale(17),
                alignItems: "center",
                justifyContent: "center",
                borderWidth: scale(1.5),
                borderColor: "#1F1500",
                backgroundColor: "#F7BC5D",
              }}
            >
              <SvgXml xml={plus} width={scale(16)} height={scale(16)} />
            </Pressable>
          </Animated.View>
        </View>

        {/* Product Details */}
        <View style={{ marginTop: scale(20) }}>
          <View className="flex-row items-start justify-between">
            <View
              className="flex-1"
              style={{ marginRight: scale(12), paddingHorizontal: scale(10) }}
            >
              <Text
                className="font-[poppins-medium] text-[#1F1500]"
                style={{ marginBottom: scale(2), fontSize: scale(20) }}
              >
                {product.title}
              </Text>

              <Text
                className="font-[poppins-regular] text-[#C2A26F]"
                style={{ fontSize: scale(14) }}
              >
                By {product.brand}
              </Text>
            </View>

            <View
              className="items-center justify-center"
              style={{
                height: scale(38),
                borderRadius: scale(19),
                paddingHorizontal: scale(18),
                marginRight: scale(10),
                backgroundColor: isVeg ? VEG_COLOR : NON_VEG_COLOR,
              }}
            >
              <Text
                className="font-[poppins-medium] text-white"
                style={{ fontSize: scale(12) }}
              >
                {product.foodType}
              </Text>
            </View>
          </View>

          {/* Rating */}
          <View
            className="flex-row items-center"
            style={{
              marginTop: scale(8),
              marginBottom: scale(18),
              paddingHorizontal: scale(10),
            }}
          >
            <View className="flex-row items-center">
              {stars.map(renderStar)}
            </View>

            <Text
              className="font-[poppins-regular] text-[#8A8A8A]"
              style={{ marginLeft: scale(8), fontSize: scale(14) }}
            >
              {product.rating.toFixed(1)} ({product.reviews.toLocaleString()})
            </Text>
          </View>

          {/* About */}
          <View style={{ paddingHorizontal: scale(10) }}>
            <HeadingTitle title="About" size={20} />

            <Text
              className="font-[poppins-regular] text-[#C2A26F]"
              style={{
                marginBottom: scale(18),
                marginTop: scale(5),
                fontSize: scale(14),
                lineHeight: scale(28),
              }}
            >
              {product.description}
            </Text>
          </View>

          {/* Ingredients */}
          <View style={{ paddingHorizontal: scale(10) }}>
            <HeadingTitle title="Ingredients" size={20} />
          </View>
          <FlatList
            horizontal
            data={product.ingredients}
            renderItem={renderIngredient}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingTop: scale(10),
              paddingHorizontal: scale(10),
            }}
          />
        </View>
      </ScrollView>

      {/* Bottom Price Bar */}
      <View
        className="self-center flex-row items-center justify-between bg-[#F6F0D4]"
        style={{
          marginBottom: scale(20),
          height: scale(60),
          width: "85%",
          borderRadius: scale(30),
        }}
      >
        <View
          className="flex-row items-center"
          style={{ marginLeft: scale(20) }}
        >
          <Text
            className="font-[poppins-regular] text-[#757B7E]"
            style={{
              marginTop: scale(5),
              fontSize: scale(14),
              textDecorationLine: "line-through",
            }}
          >
            {product.oldPrice}
          </Text>

          <Text
            className="font-[poppins-medium] text-[#1F1500]"
            style={{ marginLeft: scale(5), fontSize: scale(20) }}
          >
            {totalPrice}
          </Text>
        </View>

        <View
          className="items-center justify-center bg-[#F7BC5D]"
          style={{
            height: scale(60),
            width: "50%",
            borderRadius: scale(30),
            borderWidth: scale(1.5),
            borderColor: "#1F1500",
          }}
        >
          <Text
            className="font-[poppins-medium] text-[#1F1500]"
            style={{ fontSize: scale(16) }}
          >
            Add to cart
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ProductDetails;
