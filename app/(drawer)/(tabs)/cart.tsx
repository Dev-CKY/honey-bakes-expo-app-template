import { useCart } from "@/hooks/custom/useCart";
import arrowLeft from "@/src/assets/icons/svg/arrowLeft";
import bin2 from "@/src/assets/icons/svg/bin2";
import minus from "@/src/assets/icons/svg/minus";
import plus from "@/src/assets/icons/svg/plus";
import BackButton from "@/src/components/custom/BackButton";
import Button from "@/src/components/custom/Button";
import HeadingTitle from "@/src/components/custom/HeadingTitle";
import { router } from "expo-router";
import React from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { scale } from "react-native-size-matters";
import { SvgXml } from "react-native-svg";

const Cart = () => {
  const { cartItems, incrementQuantity, decrementQuantity } = useCart();

  return (
    <ScrollView
      className="flex-1 bg-[#FFFFE3] py-[20px]"
      showsVerticalScrollIndicator={false}
      bounces={false}
      contentContainerStyle={{
        paddingBottom: scale(120),
      }}
    >
      <View className="flex-row items-center justify-between px-[20px]">
        {/* Back button */}
        <BackButton icon={arrowLeft} onPress={() => router.back()} />

        {/* Delete Button */}
        <BackButton icon={bin2} onPress={() => console.log("Delete item")} />
      </View>

      {/* Heading */}
      <View className="px-[20px]">
        <HeadingTitle title="My Cart" />
      </View>

      {/* Cart Items */}
      {cartItems.map((item) => (
        <View
          key={item.id}
          className="flex-row items-center justify-between mt-[20px] border-b border-b-[1px] border-[#F6F0D4] pb-[20px]"
        >
          {/* Item Details */}
          <View className="flex-row items-center pl-[20px]">
            <Image source={item.image} className="w-[90px] h-[90px]" />
            <View className="ml-[10px]">
              <Text className="text-[16px] font-[poppins-medium] text-[#1F1500]">
                {item.name}
              </Text>

              <Text className="text-[14px] font-[poppins-regular] text-[#C2A26F]">
                {item.seller}
              </Text>

              <Text className="text-[16px] font-[poppins-medium] text-[#1F1500] mt-[10px]">
                {item.price}
              </Text>
            </View>
          </View>

          {/* Quantity Selector */}
          <View className="items-center pr-[20px]">
            {/* Increase */}
            <Pressable onPress={() => incrementQuantity(item.id)}>
              <SvgXml xml={plus} />
            </Pressable>

            {/* Quantity */}
            <Text className="text-[14px] font-[poppins-regular] text-[#1F1500] my-[10px]">
              {item.quantity}
            </Text>

            {/* Decrease */}
            <Pressable onPress={() => decrementQuantity(item.id)}>
              <SvgXml xml={minus} />
            </Pressable>
          </View>
        </View>
      ))}

      {/* Total calculation */}
      <Text className="text-[20px] text-[#1F1500] font-[kalnia-medium] m-[20px]">
        Price Details
      </Text>

      {/* Pricing Wrapper */}
      <View className="px-[20px]">
        {/* Subtotal */}
        <View className="flex-row items-center justify-between mb-[10px]">
          <Text className="text-[14px] text-[#1F1500] font-[poppins-regular]">
            Sub total :
          </Text>

          <Text className="text-[14px] text-[#1F1500] font-[poppins-medium]">
            ₹100
          </Text>
        </View>

        {/* Tax */}
        <View className="flex-row items-center justify-between mb-[10px]">
          <Text className="text-[14px] text-[#1F1500] font-[poppins-regular]">
            Tax :
          </Text>

          <Text className="text-[14px] text-[#1F1500] font-[poppins-medium]">
            8%
          </Text>
        </View>

        {/* Delivery Fee */}
        <View className="flex-row items-center justify-between mb-[10px]">
          <Text className="text-[14px] text-[#1F1500] font-[poppins-regular]">
            Delivery fee :
          </Text>

          <Text className="text-[14px] text-[#1F1500] font-[poppins-medium]">
            Free
          </Text>
        </View>

        {/* Dashed Border */}
        <View className="border-dashed border-[#E9DFC0] mb-[10px] border-b-[1.5px]" />

        {/* Total */}
        <View className="flex-row items-center justify-between mb-[20px]">
          <Text className="text-[14px] text-[#1F1500] font-[poppins-medium]">
            Total :
          </Text>

          <Text className="text-[14px] text-[#1F1500] font-[poppins-medium]">
            ₹108
          </Text>
        </View>

        {/* Checkout Button */}
        <Button
          label="Proceed to Checkout"
          onPress={() => router.push("/checkout")}
        />
      </View>
    </ScrollView>
  );
};

export default Cart;
