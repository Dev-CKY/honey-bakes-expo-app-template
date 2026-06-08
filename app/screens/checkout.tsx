import { useCheckout } from "@/hooks/custom/useCheckout";
import arrowLeft from "@/src/assets/icons/svg/arrowLeft";
import calender2 from "@/src/assets/icons/svg/calender2";
import card from "@/src/assets/icons/svg/card";
import eye from "@/src/assets/icons/svg/eye";
import eyeOff from "@/src/assets/icons/svg/eyeOff";
import key from "@/src/assets/icons/svg/key";
import tick from "@/src/assets/icons/svg/tick";
import user from "@/src/assets/icons/svg/user";
import AddressCard from "@/src/components/custom/AddressCard";
import HeadingTitle from "@/src/components/custom/HeadingTitle";
import IconButtonWrapper from "@/src/components/custom/IconButtonWrapper";
import PaymentMethodCard from "@/src/components/custom/PaymentMethodCard";
import TextInputField from "@/src/components/custom/TextInputField";
import { ADDRESS_DATA } from "@/src/data/address.data";
import { PAYMENT_METHODS } from "@/src/data/payment.data";
import { router } from "expo-router";
import React from "react";
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import Animated, {
  FadeIn,
  FadeOut,
  LinearTransition,
  withTiming,
} from "react-native-reanimated";
import { scale } from "react-native-size-matters";
import { SvgXml } from "react-native-svg";

const Checkout = () => {
  const {
    selectedAddress,
    setSelectedAddress,
    selectedPayment,
    setSelectedPayment,
    rememberCard,
    setRememberCard,
    isCardFormDisabled,
    animatedStyle,
    translateY,
  } = useCheckout();

  return (
    <KeyboardAvoidingView
      className="flex-1 bg-[#FFFFE3]"
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View className="flex-1">
        <ScrollView
          className="flex-1"
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{
            paddingTop: scale(20),
          }}
        >
          {/* Header */}
          <View className="px-[20px]">
            <IconButtonWrapper icon={arrowLeft} onPress={() => router.back()} />
          </View>

          {/* Heading */}
          <View className="px-[20px]">
            <HeadingTitle size={32} title="Checkout" />
          </View>

          {/* Address Heading */}
          <View className="flex-row items-center justify-between px-[20px] pt-[20px]">
            <HeadingTitle size={20} title="Select address" />

            <Pressable
              onPress={() => {
                router.push("/screens/add-address");
              }}
            >
              <Text className="font-[poppins-medium] text-[14px] text-black">
                Add new +
              </Text>
            </Pressable>
          </View>

          {/* Address List */}
          <View className="gap-y-[20px] px-[20px] pt-[20px]">
            {ADDRESS_DATA.map((item) => (
              <AddressCard
                key={item.id}
                item={item}
                isSelected={selectedAddress === item.id}
                onPress={() => setSelectedAddress(item.id)}
              />
            ))}

            <Pressable
              className="items-center justify-center rounded-full border-dashed border-[1.5px] border-[#1F1500] w-full h-[50px] self-center"
              onPress={() => router.push("/screens/addresses")}
            >
              <Text className="font-[poppins-medium] text-[14px] text-[#1F1500]">
                See more addresses
              </Text>
            </Pressable>
          </View>

          {/* Payment Method */}
          <View className="p-[20px]">
            <HeadingTitle size={20} title="Select payment method" />
          </View>

          <FlatList
            data={PAYMENT_METHODS}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingHorizontal: scale(20),
              gap: scale(16),
            }}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <PaymentMethodCard
                title={item.title}
                icon={item.icon}
                isSelected={selectedPayment === item.id}
                onPress={() =>
                  setSelectedPayment(
                    selectedPayment === item.id ? null : item.id,
                  )
                }
              />
            )}
          />

          <View className="items-center justify-center pt-[20px]">
            <HeadingTitle size={20} title="Or" />
          </View>

          {/* Card Details */}
          <Pressable
            onPress={() => {
              if (isCardFormDisabled) {
                setSelectedPayment(null);

                translateY.value = 15;

                translateY.value = withTiming(0, {
                  duration: 350,
                });
              }
            }}
          >
            <Animated.View
              entering={FadeIn.duration(300)}
              layout={LinearTransition.springify()}
              style={[animatedStyle]}
              className={`mx-[20px] mt-[20px] ${
                isCardFormDisabled
                  ? "rounded-[16px] border-[1.5px] border-dashed border-[#F7BC5D] p-[10px]"
                  : ""
              }`}
              pointerEvents={isCardFormDisabled ? "none" : "auto"}
            >
              {isCardFormDisabled && (
                <Animated.Text
                  entering={FadeIn.duration(250)}
                  exiting={FadeOut.duration(150)}
                  className="mb-[12px] text-center font-[poppins-medium] text-[12px] text-[#1F1500]"
                >
                  Tap anywhere here to pay with card instead
                </Animated.Text>
              )}

              <TextInputField
                keyboardType="default"
                placeholder="Card holder name"
                leftIcon={<SvgXml xml={user} width={24} height={24} />}
              />

              <TextInputField
                keyboardType="number-pad"
                placeholder="Card number"
                isEncrypted
                leftIcon={<SvgXml xml={card} width={24} height={24} />}
                eyeOpenIcon={<SvgXml xml={eye} width={24} height={24} />}
                eyeCloseIcon={<SvgXml xml={eyeOff} width={24} height={24} />}
              />

              <View className="flex-row items-center justify-between">
                <View className="w-[48%]">
                  <TextInputField
                    keyboardType="number-pad"
                    placeholder="Expiry"
                    leftIcon={<SvgXml xml={calender2} width={24} height={24} />}
                  />
                </View>

                <View className="w-[48%]">
                  <TextInputField
                    keyboardType="number-pad"
                    placeholder="CVV"
                    isEncrypted
                    leftIcon={<SvgXml xml={key} width={24} height={24} />}
                  />
                </View>
              </View>

              {/* Remember Card */}
              <Pressable
                disabled={isCardFormDisabled}
                onPress={() => setRememberCard(!rememberCard)}
                className="mt-[10px] flex-row items-center px-[10px]"
              >
                <View
                  className={`h-[30px] w-[30px] items-center justify-center rounded-[5px] border border-[#1F1500] ${
                    rememberCard ? "bg-[#F7BC5D]" : "bg-transparent"
                  }`}
                >
                  {rememberCard && (
                    <Animated.View
                      entering={FadeIn.duration(150)}
                      exiting={FadeOut.duration(150)}
                    >
                      <SvgXml xml={tick} />
                    </Animated.View>
                  )}
                </View>

                <Text className="ml-[10px] font-[poppins-medium] text-[16px] text-[#1F1500]">
                  Remember my card details
                </Text>
              </Pressable>
            </Animated.View>
          </Pressable>
        </ScrollView>

        {/* Footer */}
        <View className="my-[20px] h-[60px] w-[85%] self-center rounded-full bg-[#F6F0D4] flex-row items-center justify-between">
          <Text className="ml-[20px] w-[40%] font-[poppins-medium] text-[20px] text-[#1F1500]">
            $100.00
          </Text>

          <Pressable
            className="h-[60px] w-[60%] items-center justify-center rounded-full border-[1.5px] border-[#1F1500] bg-[#F7BC5D]"
            onPress={() => router.push("/screens/order-placed")}
          >
            <Text className="font-[poppins-medium] text-[16px] text-[#1F1500]">
              Place order
            </Text>
          </Pressable>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Checkout;
