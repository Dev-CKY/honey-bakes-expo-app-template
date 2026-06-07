import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { router } from "expo-router";
import React from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
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
    <View
      key={item.id}
      className="mt-[20px] flex-row items-center justify-between border-b border-[#F6F0D4] pb-[20px]"
    >
      {/* Product Information */}
      <View className="flex-1 flex-row items-center pl-[20px]">
        <Image
          source={item.image}
          className="h-[90px] w-[90px] rounded-[10px]"
        />

        <View className="ml-[10px] flex-1">
          <Text className="font-[poppins-medium] text-[16px] text-[#1F1500]">
            {item.name}
          </Text>

          <Text className="font-[poppins-regular] text-[14px] text-[#C2A26F]">
            {item.seller}
          </Text>

          <Text className="mt-[10px] font-[poppins-medium] text-[16px] text-[#1F1500]">
            {item.price}
          </Text>
        </View>
      </View>

      {/* Quantity Controls */}
      <View className="items-center pr-[20px]">
        <Pressable onPress={() => incrementQuantity(item.id)}>
          <SvgXml xml={plus} />
        </Pressable>

        <Text className="my-[10px] font-[poppins-regular] text-[14px] text-[#1F1500]">
          {item.quantity}
        </Text>

        <Pressable onPress={() => decrementQuantity(item.id)}>
          <SvgXml xml={minus} />
        </Pressable>

        {/* Delete Item */}
        <Pressable
          className="mt-[12px]"
          onPress={() => handleRemoveItem(item.id)}
        >
          <SvgXml xml={bin2} width={18} height={18} />
        </Pressable>
      </View>
    </View>
  );

  // --------------------------------------------------
  // Render Price Summary Section
  // --------------------------------------------------
  const renderPriceDetails = () => (
    <View
      className="border-t border-[#F6F0D4] bg-[#FFFFE3] px-[20px] pt-[20px]"
      style={{
        paddingBottom: insets.bottom + tabBarHeight + 40,
      }}
    >
      {/* Section Title */}
      <HeadingTitle size={20} title="Price Details" />

      {/* Order Summary Rows */}
      {orderSummary.map((item, index) => (
        <View
          key={index}
          className="mt-[10px] flex-row items-center justify-between"
        >
          <Text className="font-[poppins-regular] text-[14px] text-[#C2A26F]">
            {item.label} :
          </Text>

          <Text className="font-[poppins-medium] text-[14px] text-[#C2A26F]">
            {item.value}
          </Text>
        </View>
      ))}

      {/* Divider */}
      <View className="my-[10px] border-b border-dashed border-[#E9DFC0]" />

      {/* Grand Total */}
      <View className="mb-[20px] flex-row items-center justify-between">
        <Text className="font-[poppins-medium] text-[16px] text-[#1F1500]">
          Total :
        </Text>

        <Text className="font-[poppins-medium] text-[16px] text-[#1F1500]">
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
    <View className="flex-1 bg-[#FFFFE3] pt-[20px]">
      {/* ==================================================
          Header
      ================================================== */}
      <View className="flex-row items-center justify-between px-[20px]">
        <IconButtonWrapper icon={arrowLeft} onPress={() => router.back()} />

        {!isCartEmpty && (
          <IconButtonWrapper icon={bin2} onPress={handleClearCart} />
        )}
      </View>

      {/* ==================================================
          Screen Title
      ================================================== */}
      <View className="px-[20px]">
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
          <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
            {cartItems.map(renderCartItem)}

            {/* ==================================================
              Price Details & Checkout
          ================================================== */}
            {renderPriceDetails()}
          </ScrollView>
        </>
      )}
    </View>
  );
};

export default Cart;
