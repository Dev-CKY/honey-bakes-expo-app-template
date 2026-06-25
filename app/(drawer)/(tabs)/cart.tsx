import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { router } from "expo-router";
import React from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import Animated, { FadeOut, LinearTransition } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { scale } from "react-native-size-matters";
import { SvgXml } from "react-native-svg";

import { useCart } from "@/hooks/custom/useCart";

import arrowLeft from "@/src/assets/icons/svg/arrowLeft";
import bin2 from "@/src/assets/icons/svg/bin2";
import minus from "@/src/assets/icons/svg/minus";
import plus from "@/src/assets/icons/svg/plus";

import Button from "@/src/components/custom/Button";
import EmptyScreenState from "@/src/components/custom/EmptyScreenState";
import HeadingTitle from "@/src/components/custom/HeadingTitle";
import IconButtonWrapper from "@/src/components/custom/IconButtonWrapper";
import styles from "@/src/styles/screens/cart.styles";

// ======================================================
// Cart Screen
// ======================================================

const Cart = () => {
  // --------------------------------------------------
  // Cart State & Actions
  // --------------------------------------------------
  const {
    cartItems,
    incrementQuantity,
    decrementQuantity,
    handleClearCart,
    handleRemoveItem,
    orderSummary,
    total,
  } = useCart();

  // --------------------------------------------------
  // Layout Helpers
  // --------------------------------------------------
  const insets = useSafeAreaInsets();
  const tabBarHeight = useBottomTabBarHeight();

  // Check whether cart contains any items
  const isCartEmpty = cartItems.length === 0;

  // Empty cart image
  const cartEmptyImage = require("@/src/assets/images/custom/icons/cart.png");

  // --------------------------------------------------
  // Render Single Cart Item
  // --------------------------------------------------
  const renderCartItem = (item: any) => (
    <Animated.View
      key={item.id}
      layout={LinearTransition.springify()}
      exiting={FadeOut.duration(300)}
      style={styles.cartItem}
    >
      {/* Product Information */}
      <View style={styles.productContainer}>
        <Image source={item.image} style={styles.productImage} />

        <View style={styles.productInfo}>
          <Text style={styles.productName}>{item.name}</Text>

          <Text style={styles.sellerText}>{item.seller}</Text>

          <Text style={styles.priceText}>{item.price}</Text>
        </View>
      </View>

      {/* Quantity Controls */}
      <View style={styles.quantityContainer}>
        <Pressable onPress={() => incrementQuantity(item.id)}>
          <SvgXml xml={plus} width={scale(16)} height={scale(16)} />
        </Pressable>

        <Text style={styles.quantityText}>{item.quantity}</Text>

        <Pressable onPress={() => decrementQuantity(item.id)}>
          <SvgXml xml={minus} width={scale(16)} height={scale(16)} />
        </Pressable>

        {/* Delete Item */}
        <Pressable
          style={styles.deleteButton}
          onPress={() => handleRemoveItem(item.id)}
        >
          <SvgXml xml={bin2} width={scale(18)} height={scale(18)} />
        </Pressable>
      </View>
    </Animated.View>
  );

  // --------------------------------------------------
  // Render Price Summary Section
  // --------------------------------------------------
  const renderPriceDetails = () => (
    <View
      style={[
        styles.priceDetailsContainer,
        { paddingBottom: tabBarHeight + scale(50) },
      ]}
    >
      {/* Section Title */}
      <HeadingTitle size={20} title="Price Details" />

      {/* Order Summary Rows */}
      {orderSummary.map((item, index) => (
        <View key={index} style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>{item.label} :</Text>

          <Text style={styles.summaryValue}>{item.value}</Text>
        </View>
      ))}

      {/* Divider */}
      <View style={styles.divider} />

      {/* Grand Total */}
      <View style={styles.totalRow}>
        <Text style={styles.totalText}>Total :</Text>

        <Text style={styles.totalText}>{total}</Text>
      </View>

      {/* Checkout Button */}
      <Button
        label="Proceed to Checkout"
        onPress={() => router.push("/screens/checkout")}
      />
    </View>
  );

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      <View>
        {/* ==================================================
          Header
      ================================================== */}
        <View style={styles.header}>
          <IconButtonWrapper icon={arrowLeft} onPress={() => router.back()} />

          {!isCartEmpty && (
            <IconButtonWrapper icon={bin2} onPress={handleClearCart} />
          )}
        </View>

        {/* ==================================================
          Screen Title
      ================================================== */}
        <View style={styles.titleContainer}>
          <HeadingTitle size={32} title="My Cart" />
        </View>

        {/* ==================================================
          Empty Cart State
      ================================================== */}
        {isCartEmpty ? (
          <EmptyScreenState title="Cart" image={cartEmptyImage} />
        ) : (
          <>
            {/* ==================================================
              Cart Items List
          ================================================== */}

            {cartItems.map(renderCartItem)}

            {/* ==================================================
              Price Details & Checkout
          ================================================== */}
            {renderPriceDetails()}
          </>
        )}
      </View>
    </ScrollView>
  );
};

export default Cart;
