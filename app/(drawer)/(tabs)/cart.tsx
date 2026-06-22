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
      className="flex-row items-center justify-between"
      style={{
        marginTop: scale(20),
        paddingBottom: scale(20),
        borderBottomWidth: scale(1),
        borderBottomColor: "#F6F0D4",
      }}
    >
      {/* Product Information */}
      <View
        className="flex-1 flex-row items-center"
        style={{ paddingLeft: scale(10) }}
      >
        <Image
          source={item.image}
          style={{
            height: scale(90),
            width: scale(90),
            borderRadius: scale(10),
          }}
        />

        <View style={{ marginLeft: scale(10), flex: 1 }}>
          <Text
            style={{
              fontFamily: "poppins-medium",
              fontSize: scale(16),
              color: "#1F1500",
            }}
          >
            {item.name}
          </Text>

          <Text
            style={{
              fontFamily: "poppins-regular",
              fontSize: scale(14),
              color: "#C2A26F",
            }}
          >
            {item.seller}
          </Text>

          <Text
            style={{
              marginTop: scale(10),
              fontFamily: "poppins-medium",
              fontSize: scale(16),
              color: "#1F1500",
            }}
          >
            {item.price}
          </Text>
        </View>
      </View>

      {/* Quantity Controls */}
      <View style={{ alignItems: "center", paddingRight: scale(10) }}>
        <Pressable onPress={() => incrementQuantity(item.id)}>
          <SvgXml xml={plus} width={scale(16)} height={scale(16)} />
        </Pressable>

        <Text
          style={{
            marginVertical: scale(10),
            fontFamily: "poppins-regular",
            fontSize: scale(14),
            color: "#1F1500",
          }}
        >
          {item.quantity}
        </Text>

        <Pressable onPress={() => decrementQuantity(item.id)}>
          <SvgXml xml={minus} width={scale(16)} height={scale(16)} />
        </Pressable>

        {/* Delete Item */}
        <Pressable
          style={{ marginTop: scale(12) }}
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
      className="bg-[#FFFFE3]"
      style={{
        borderTopWidth: scale(1),
        borderTopColor: "#F6F0D4",
        backgroundColor: "#FFFFE3",
        paddingHorizontal: scale(20),
        paddingTop: scale(20),
        paddingBottom: tabBarHeight + scale(50),
      }}
    >
      {/* Section Title */}
      <HeadingTitle size={20} title="Price Details" />

      {/* Order Summary Rows */}
      {orderSummary.map((item, index) => (
        <View
          key={index}
          style={{
            marginTop: scale(10),
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontFamily: "poppins-regular",
              fontSize: scale(14),
              color: "#C2A26F",
            }}
          >
            {item.label} :
          </Text>

          <Text
            style={{
              fontFamily: "poppins-medium",
              fontSize: scale(14),
              color: "#C2A26F",
            }}
          >
            {item.value}
          </Text>
        </View>
      ))}

      {/* Divider */}
      <View
        style={{
          marginVertical: scale(10),
          borderBottomWidth: scale(1),
          borderStyle: "dashed",
          borderBottomColor: "#E9DFC0",
        }}
      />

      {/* Grand Total */}
      <View
        style={{
          marginBottom: scale(20),
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontFamily: "poppins-medium",
            fontSize: scale(16),
            color: "#1F1500",
          }}
        >
          Total :
        </Text>

        <Text
          style={{
            fontFamily: "poppins-medium",
            fontSize: scale(16),
            color: "#1F1500",
          }}
        >
          {total}
        </Text>
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
      className="flex-1 bg-[#FFFFE3]"
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
      style={{ paddingTop: scale(20) }}
    >
      <View>
        {/* ==================================================
          Header
      ================================================== */}
        <View
          className="flex-row items-center justify-between"
          style={{ paddingHorizontal: scale(20) }}
        >
          <IconButtonWrapper icon={arrowLeft} onPress={() => router.back()} />

          {!isCartEmpty && (
            <IconButtonWrapper icon={bin2} onPress={handleClearCart} />
          )}
        </View>

        {/* ==================================================
          Screen Title
      ================================================== */}
        <View style={{ paddingHorizontal: scale(20) }}>
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
