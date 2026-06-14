import { router } from "expo-router";
import React, { useEffect } from "react";
import { Image, ImageBackground, Pressable, Text, View } from "react-native";
import Animated, {
  Easing,
  Extrapolation,
  interpolate,
  SharedValue,
  SlideInDown,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
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

const VEG_COLOR = "#00CF21";
const NON_VEG_COLOR = "#F7715D";

// Ingredient card width
const INGREDIENT_CARD_WIDTH = scale(90);

type IngredientItem = {
  id: string;
  name: string;
  image: any;
};

type AnimatedIngredientCardProps = {
  item: IngredientItem;
  index: number;
  scrollX: SharedValue<number>;
};

// Animated Ingredient Card Component with scroll-based animation
const AnimatedIngredientCard = ({
  item,
  index,
  scrollX,
}: AnimatedIngredientCardProps) => {
  const animatedStyle = useAnimatedStyle(() => {
    const itemPosition = index * INGREDIENT_CARD_WIDTH;

    const inputRange = [
      itemPosition - INGREDIENT_CARD_WIDTH,
      itemPosition,
      itemPosition + INGREDIENT_CARD_WIDTH,
    ];

    const scale = interpolate(
      scrollX.value,
      inputRange,
      [0.85, 1, 0.85],
      Extrapolation.CLAMP,
    );

    const opacity = interpolate(
      scrollX.value,
      inputRange,
      [0.6, 1, 0.6],
      Extrapolation.CLAMP,
    );

    const translateY = interpolate(
      scrollX.value,
      inputRange,
      [10, 0, 10],
      Extrapolation.CLAMP,
    );

    return {
      opacity,
      transform: [{ scale }, { translateY }],
    };
  });

  return (
    <Animated.View
      style={[
        {
          width: INGREDIENT_CARD_WIDTH,
          alignItems: "center",
          marginRight: scale(16),
        },
        animatedStyle,
      ]}
    >
      <View className="h-[70px] w-[70px] items-center justify-center rounded-full bg-[#F6F0D4] shadow-sm">
        <Image
          source={item.image}
          className="h-[32px] w-[32px]"
          resizeMode="contain"
        />
      </View>
      <Text className="mt-[8px] font-[poppins-medium] text-[12px] text-[#1F1500] text-center">
        {item.name}
      </Text>
    </Animated.View>
  );
};

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

  const scrollY = useSharedValue(0);
  const ingredientsScrollX = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
  });

  const ingredientsScrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      ingredientsScrollX.value = event.contentOffset.x;
    },
  });

  const AnimatedQuantity = ({ value }: { value: number }) => {
    const translateY = useSharedValue(20);

    useEffect(() => {
      translateY.value = 20;
      translateY.value = withTiming(0, {
        duration: 1000,
        easing: Easing.out(Easing.cubic),
      });
    }, [value]);

    const animatedStyle = useAnimatedStyle(() => ({
      transform: [{ translateY: translateY.value }],
    }));

    return (
      <View className="h-[24px] w-[30px] items-center justify-center overflow-hidden">
        <Animated.Text
          style={animatedStyle}
          className="font-[poppins-semibold] text-[16px] text-[#1F1500]"
        >
          {value}
        </Animated.Text>
      </View>
    );
  };

  if (!product) {
    return null;
  }

  const renderStar = ({ id, filled }: { id: any; filled: boolean }) => (
    <SvgXml
      key={id}
      xml={filled ? starFilled : starEmpty}
      style={{ marginRight: scale(2) }}
    />
  );

  return (
    <Animated.View
      className="flex-1 bg-[#FFFFE3]"
      entering={SlideInDown.duration(2000).easing(
        Easing.bezier(0.22, 1, 0.36, 1),
      )}
    >
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        contentContainerStyle={{
          paddingBottom: scale(40),
        }}
      >
        {/* Hero Image */}
        <ImageBackground
          source={product.image}
          resizeMode="cover"
          className="h-[280px] px-[20px] pt-[20px]"
        >
          <View className="flex-row justify-between">
            <View className="h-[48px] w-[48px] rounded-full bg-white">
              <IconButtonWrapper
                icon={arrowLeft}
                onPress={() => {
                  router.back();
                }}
              />
            </View>

            <Pressable className="h-[50px] w-[50px] items-center justify-center rounded-full border-[1.5px] border-[#1F1500] bg-[#F7BC5D]">
              <SvgXml xml={heart} />
            </Pressable>
          </View>
        </ImageBackground>

        {/* Quantity Controls */}
        <View className="z-10 mt-[-25px] h-[50px] w-[120px] self-center flex-row items-center justify-between rounded-full bg-[#F6F0D4] px-[5px]">
          <Pressable
            onPress={decreaseQuantity}
            className="h-[30px] w-[30px] items-center justify-center rounded-full bg-white"
          >
            <SvgXml xml={minus} />
          </Pressable>

          <AnimatedQuantity value={quantity} />

          <Pressable
            onPress={increaseQuantity}
            className="h-[30px] w-[30px] items-center justify-center rounded-full border-[1.5px] border-[#1F1500] bg-[#F7BC5D]"
          >
            <SvgXml xml={plus} />
          </Pressable>
        </View>

        {/* Product Details */}
        <View className="mt-[20px] px-[20px]">
          <View className="flex-row items-start justify-between">
            <View className="mr-[12px] flex-1">
              <Text className="mb-[2px] font-[poppins-medium] text-[20px] text-[#1F1500]">
                {product.title}
              </Text>
              <Text className="font-[poppins-regular] text-[14px] text-[#C2A26F]">
                By {product.brand}
              </Text>
            </View>

            <View
              className="h-[38px] items-center justify-center rounded-full px-[18px]"
              style={{ backgroundColor: isVeg ? VEG_COLOR : NON_VEG_COLOR }}
            >
              <Text className="font-[poppins-medium] text-white">
                {product.foodType}
              </Text>
            </View>
          </View>

          {/* Rating */}
          <View className="mb-[18px] mt-[8px] flex-row items-center">
            <View className="flex-row items-center">
              {stars.map(renderStar)}
            </View>
            <Text className="ml-[8px] font-[poppins-regular] text-[14px] text-[#8A8A8A]">
              {product.rating.toFixed(1)} ({product.reviews.toLocaleString()})
            </Text>
          </View>

          {/* About */}
          <HeadingTitle title="About" size={20} />
          <Text className="mb-[18px] mt-[5px] font-[poppins-regular] text-[14px] leading-[28px] text-[#C2A26F]">
            {product.description}
          </Text>

          {/* Ingredients Section with Scroll Animation */}
          <View>
            <View className="flex-row items-center justify-between mb-[12px]">
              <HeadingTitle title="Ingredients" size={20} />
              <View className="h-[4px] w-[40px] rounded-full bg-[#F7BC5D]" />
            </View>

            <Animated.FlatList
              data={product.ingredients}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              onScroll={ingredientsScrollHandler}
              scrollEventThrottle={16}
              contentContainerStyle={{
                paddingBottom: scale(10),
              }}
              renderItem={({ item, index }) => (
                <AnimatedIngredientCard
                  item={item}
                  index={index}
                  scrollX={ingredientsScrollX}
                />
              )}
              snapToInterval={INGREDIENT_CARD_WIDTH + scale(16)}
              decelerationRate="fast"
            />

            {/* Simple decorative text */}
            <Text className="text-center mt-[12px] font-[poppins-regular] text-[11px] text-[#C2A26F]">
              • Fresh ingredients • No preservatives •
            </Text>
          </View>
        </View>
      </Animated.ScrollView>

      {/* Bottom Price Bar */}
      <View className="mb-[20px] h-[60px] w-[85%] self-center flex-row items-center justify-between rounded-full bg-[#F6F0D4]">
        <View className="ml-[20px] flex-row items-center">
          <Text className="mt-[5px] font-[poppins-regular] text-[14px] text-[#757B7E] line-through">
            {product.oldPrice}
          </Text>
          <Text className="ml-[5px] font-[poppins-medium] text-[20px] text-[#1F1500]">
            {totalPrice}
          </Text>
        </View>

        <Pressable className="h-[60px] w-[50%] items-center justify-center rounded-full border-[1.5px] border-[#1F1500] bg-[#F7BC5D]">
          <Text className="font-[poppins-medium] text-[16px] text-[#1F1500]">
            Add to cart
          </Text>
        </Pressable>
      </View>
    </Animated.View>
  );
};

export default ProductDetails;
