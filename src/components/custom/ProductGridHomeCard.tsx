import { PRODUCT_ITEMS } from "@/src/data/product-items.data";
import { router } from "expo-router";
import React from "react";
import { FlatList } from "react-native";
import Animated, {
  Extrapolation,
  SharedValue,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { scale } from "react-native-size-matters";
import ProductGridCard from "./ProductGridCard";

type ProductItem = (typeof PRODUCT_ITEMS)[number];

const CARD_WIDTH = scale(170);

const AnimatedFlatList = Animated.createAnimatedComponent(
  FlatList<ProductItem>,
);

type AnimatedCardProps = {
  item: ProductItem;
  index: number;
  scrollX: SharedValue<number>;
};

const AnimatedProductCard = ({ item, index, scrollX }: AnimatedCardProps) => {
  const animatedStyle = useAnimatedStyle(() => {
    const itemPosition = index * CARD_WIDTH;

    const inputRange = [
      itemPosition - CARD_WIDTH,
      itemPosition,
      itemPosition + CARD_WIDTH,
    ];

    const scale = interpolate(
      scrollX.value,
      inputRange,
      [0.92, 1, 0.92],
      Extrapolation.CLAMP,
    );

    const opacity = interpolate(
      scrollX.value,
      inputRange,
      [0.75, 1, 0.75],
      Extrapolation.CLAMP,
    );

    const translateY = interpolate(
      scrollX.value,
      inputRange,
      [8, 0, 8],
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
          width: CARD_WIDTH,
        },
        animatedStyle,
      ]}
      // className="mr-4"
    >
      <ProductGridCard
        title={item.title}
        image={item.image}
        price={item.price}
        brand={item.brand}
        onPress={() =>
          router.push({
            pathname: "/screens/products/product",
            params: {
              id: item.id,
            },
          })
        }
      />
    </Animated.View>
  );
};

const ProductGridHomeCard = () => {
  const scrollX = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollX.value = event.contentOffset.x;
    },
  });

  return (
    <AnimatedFlatList
      data={PRODUCT_ITEMS}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      onScroll={scrollHandler}
      scrollEventThrottle={16}
      contentContainerStyle={{
        paddingTop: scale(20),
      }}
      renderItem={({ item, index }) => (
        <AnimatedProductCard item={item} index={index} scrollX={scrollX} />
      )}
      snapToInterval={CARD_WIDTH + scale(16)}
      decelerationRate="fast"
    />
  );
};

export default ProductGridHomeCard;
