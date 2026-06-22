// MyOrders.tsx

import React from "react";

import { ScrollView, Text, View } from "react-native";

import { router } from "expo-router";
import { scale } from "react-native-size-matters";

// Reanimated
import Animated, { FadeIn } from "react-native-reanimated";

// Hook
import { useMyOrders } from "@/hooks/custom/useMyOrders";

// Icons
import arrowLeft from "@/src/assets/icons/svg/arrowLeft";

// Components
import HeadingTitle from "@/src/components/custom/HeadingTitle";
import IconButtonWrapper from "@/src/components/custom/IconButtonWrapper";
import OrderCard from "@/src/components/custom/OrderCard";
import SearchBar from "@/src/components/custom/SearchBar";
import ToggleButton from "@/src/components/custom/ToggleButton";

const MyOrders = () => {
  const {
    activeTab,
    handleToggle,
    filteredOrders,
    animatedToggleStyle,
    BUTTON_WIDTH,
  } = useMyOrders();

  return (
    <ScrollView
      className="flex-1 bg-[#FFFDE7]"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingBottom: scale(20),
      }}
      style={{ paddingTop: scale(20) }}
    >
      {/* Back Button */}
      <View style={{ paddingHorizontal: scale(20) }}>
        <IconButtonWrapper icon={arrowLeft} onPress={() => router.back()} />
      </View>

      {/* Heading */}
      <View style={{ paddingHorizontal: scale(20) }}>
        <HeadingTitle size={32} title="My Orders" />
      </View>

      {/* Toggle Tabs */}
      <View style={{ padding: scale(20) }}>
        <View
          style={{ height: scale(52), padding: scale(4) }}
          className="overflow-hidden rounded-full bg-[#F4EFD7]"
        >
          {/* Animated Active Background */}
          <Animated.View
            className="absolute rounded-full border border-[#2E261C] bg-[#F0BA5C]"
            style={[
              {
                width: BUTTON_WIDTH,
                left: scale(4),
                top: scale(4),
                height: scale(44),
              },
              animatedToggleStyle,
            ]}
          />

          {/* Toggle Buttons */}
          <View className="flex-1 flex-row">
            <ToggleButton
              title="Ongoing"
              value="ongoing"
              handleToggle={handleToggle}
            />

            <ToggleButton
              title="History"
              value="history"
              handleToggle={handleToggle}
            />
          </View>
        </View>
      </View>

      {/* Search */}
      <View style={{ paddingHorizontal: scale(20) }}>
        <SearchBar placeholder="Search orders..." searchValue="" />
      </View>

      {/* Orders List */}
      <View style={{ marginTop: scale(10) }}>
        {filteredOrders.length ? (
          filteredOrders.map((item) => (
            <OrderCard key={`${activeTab}-${item.id}`} item={item} />
          ))
        ) : (
          <Animated.View
            entering={FadeIn.duration(300)}
            className="items-center"
            style={{ paddingVertical: scale(40) }}
          >
            <Text
              style={{ fontSize: scale(16) }}
              className="font-[poppins-medium] text-[#777]"
            >
              No orders found
            </Text>
          </Animated.View>
        )}
      </View>
    </ScrollView>
  );
};

export default MyOrders;
