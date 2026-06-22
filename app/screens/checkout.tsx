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
          <View style={{ paddingHorizontal: scale(20) }}>
            <IconButtonWrapper icon={arrowLeft} onPress={() => router.back()} />
          </View>

          {/* Heading */}
          <View style={{ paddingHorizontal: scale(20) }}>
            <HeadingTitle size={32} title="Checkout" />
          </View>

          {/* Address Heading */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingHorizontal: scale(20),
              paddingTop: scale(20),
            }}
          >
            <HeadingTitle size={20} title="Select address" />

            <Pressable onPress={() => router.push("/screens/add-address")}>
              <Text
                style={{ fontSize: scale(14) }}
                className="font-[poppins-medium] text-black"
              >
                Add new +
              </Text>
            </Pressable>
          </View>

          {/* Address List */}
          <View
            style={{
              paddingHorizontal: scale(20),
              paddingTop: scale(20),
              gap: scale(20),
            }}
          >
            {ADDRESS_DATA.map((item) => (
              <AddressCard
                key={item.id}
                item={item}
                isSelected={selectedAddress === item.id}
                onPress={() => setSelectedAddress(item.id)}
              />
            ))}

            <Pressable
              onPress={() => router.push("/screens/addresses")}
              style={{
                alignItems: "center",
                justifyContent: "center",
                borderRadius: scale(50) / 2,
                borderWidth: scale(1.5),
                borderStyle: "dashed",
                borderColor: "#1F1500",
                width: "100%",
                height: scale(50),
                alignSelf: "center",
              }}
            >
              <Text
                style={{ fontSize: scale(14) }}
                className="font-[poppins-medium] text-[#1F1500]"
              >
                See more addresses
              </Text>
            </Pressable>
          </View>

          {/* Payment Method */}
          <View style={{ padding: scale(20) }}>
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

          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              paddingTop: scale(20),
            }}
          >
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
              pointerEvents={isCardFormDisabled ? "none" : "auto"}
              style={[
                animatedStyle,
                { marginHorizontal: scale(20), marginTop: scale(20) },
                isCardFormDisabled
                  ? {
                      borderRadius: scale(16),
                      borderWidth: scale(1.5),
                      borderStyle: "dashed",
                      borderColor: "#F7BC5D",
                      padding: scale(10),
                    }
                  : {},
              ]}
            >
              {isCardFormDisabled && (
                <Animated.Text
                  entering={FadeIn.duration(250)}
                  exiting={FadeOut.duration(150)}
                  className="font-[poppins-medium] text-[#1F1500]"
                  style={{
                    marginBottom: scale(12),
                    textAlign: "center",
                    fontSize: scale(12),
                  }}
                >
                  Tap anywhere here to pay with card instead
                </Animated.Text>
              )}

              <TextInputField
                keyboardType="default"
                placeholder="Card holder name"
                leftIcon={
                  <SvgXml xml={user} width={scale(24)} height={scale(24)} />
                }
              />

              <TextInputField
                keyboardType="number-pad"
                placeholder="Card number"
                isEncrypted
                leftIcon={
                  <SvgXml xml={card} width={scale(24)} height={scale(24)} />
                }
                eyeOpenIcon={
                  <SvgXml xml={eye} width={scale(24)} height={scale(24)} />
                }
                eyeCloseIcon={
                  <SvgXml xml={eyeOff} width={scale(24)} height={scale(24)} />
                }
              />

              <View className="flex-row items-center justify-between">
                <View style={{ width: "48%" }}>
                  <TextInputField
                    keyboardType="number-pad"
                    placeholder="Expiry"
                    leftIcon={
                      <SvgXml
                        xml={calender2}
                        width={scale(24)}
                        height={scale(24)}
                      />
                    }
                  />
                </View>

                <View style={{ width: "48%" }}>
                  <TextInputField
                    keyboardType="number-pad"
                    placeholder="CVV"
                    isEncrypted
                    leftIcon={
                      <SvgXml xml={key} width={scale(24)} height={scale(24)} />
                    }
                  />
                </View>
              </View>

              {/* Remember Card */}
              <Pressable
                disabled={isCardFormDisabled}
                onPress={() => setRememberCard(!rememberCard)}
                style={{
                  marginTop: scale(10),
                  flexDirection: "row",
                  alignItems: "center",
                  paddingHorizontal: scale(10),
                }}
              >
                <View
                  style={{
                    height: scale(30),
                    width: scale(30),
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: scale(5),
                    borderWidth: scale(1),
                    borderColor: "#1F1500",
                    backgroundColor: rememberCard ? "#F7BC5D" : "transparent",
                  }}
                >
                  {rememberCard && (
                    <Animated.View
                      entering={FadeIn.duration(150)}
                      exiting={FadeOut.duration(150)}
                    >
                      <SvgXml xml={tick} width={scale(16)} height={scale(16)} />
                    </Animated.View>
                  )}
                </View>

                <Text
                  style={{ marginLeft: scale(10), fontSize: scale(16) }}
                  className="font-[poppins-medium] text-[#1F1500]"
                >
                  Remember my card details
                </Text>
              </Pressable>
            </Animated.View>
          </Pressable>
        </ScrollView>

        {/* Footer */}
        <View
          style={{
            marginVertical: scale(20),
            height: scale(60),
            width: "85%",
            alignSelf: "center",
            borderRadius: scale(60) / 2,
            backgroundColor: "#F6F0D4",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              paddingLeft: scale(20),
              width: "40%",
              fontSize: scale(20),
            }}
            className="font-[poppins-medium] text-[#1F1500]"
          >
            $100.00
          </Text>

          <Pressable
            style={{
              height: scale(60),
              width: "60%",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: scale(60) / 2,
              borderWidth: scale(1.5),
              borderColor: "#1F1500",
              backgroundColor: "#F7BC5D",
            }}
            onPress={() => router.push("/screens/order-placed")}
          >
            <Text
              style={{ fontSize: scale(16) }}
              className="font-[poppins-medium] text-[#1F1500]"
            >
              Place order
            </Text>
          </Pressable>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Checkout;
