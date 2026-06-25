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
import styles from "@/src/styles/screens/checkout.styles";
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
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.contentWrapper}>
        <ScrollView
          style={styles.contentWrapper}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={styles.scrollContent}
        >
          {/* Header */}
          <View style={styles.horizontalPadding}>
            <IconButtonWrapper icon={arrowLeft} onPress={() => router.back()} />
          </View>

          {/* Heading */}
          <View style={styles.horizontalPadding}>
            <HeadingTitle size={32} title="Checkout" />
          </View>

          {/* Address Heading */}
          <View style={styles.sectionHeader}>
            <HeadingTitle size={20} title="Select address" />

            <Pressable onPress={() => router.push("/screens/add-address")}>
              <Text style={styles.addNewText}>Add new +</Text>
            </Pressable>
          </View>

          {/* Address List */}
          <View style={styles.addressContainer}>
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
              style={styles.moreAddressesButton}
            >
              <Text style={styles.moreAddressesText}>See more addresses</Text>
            </Pressable>
          </View>

          {/* Payment Method */}
          <View style={styles.paymentHeadingContainer}>
            <HeadingTitle size={20} title="Select payment method" />
          </View>

          <FlatList
            data={PAYMENT_METHODS}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.paymentMethodsContent}
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

          <View style={styles.orContainer}>
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
                styles.cardFormContainer,
                isCardFormDisabled ? styles.disabledCardForm : {},
              ]}
            >
              {isCardFormDisabled && (
                <Animated.Text
                  entering={FadeIn.duration(250)}
                  exiting={FadeOut.duration(150)}
                  style={styles.cardFormHint}
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

              <View style={styles.cardRow}>
                <View style={styles.halfWidth}>
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

                <View style={styles.halfWidth}>
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
                style={styles.rememberContainer}
              >
                <View
                  style={[
                    styles.checkbox,
                    rememberCard ? styles.checkboxActive : {},
                  ]}
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

                <Text style={styles.rememberText}>
                  Remember my card details
                </Text>
              </Pressable>
            </Animated.View>
          </Pressable>
        </ScrollView>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.totalPrice}>$100.00</Text>

          <Pressable
            style={styles.placeOrderButton}
            onPress={() => router.push("/screens/order-placed")}
          >
            <Text style={styles.placeOrderText}>Place order</Text>
          </Pressable>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Checkout;
