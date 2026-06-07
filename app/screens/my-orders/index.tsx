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
      className="flex-1 bg-[#FFFDE7] pt-[20px]"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingBottom: scale(20),
      }}
    >
      {/* Back Button */}
      <View className="px-[20px]">
        <IconButtonWrapper icon={arrowLeft} onPress={() => router.back()} />
      </View>

      {/* Heading */}
      <View className="px-[20px]">
        <HeadingTitle size={32} title="My Orders" />
      </View>

      {/* Toggle Tabs */}
      <View className="p-[20px]">
        <View className="h-[52px] overflow-hidden rounded-full bg-[#F4EFD7] p-[4px]">
          {/* Animated Active Background */}
          <Animated.View
            className="absolute left-[4px] top-[4px] h-[44px] rounded-full border border-[#2E261C] bg-[#F0BA5C]"
            style={[
              {
                width: BUTTON_WIDTH,
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
      <View className="px-[20px]">
        <SearchBar placeholder="Search orders..." searchValue="" />
      </View>

      {/* Orders List */}
      <View className="mt-[10px]">
        {filteredOrders.length ? (
          filteredOrders.map((item) => (
            <OrderCard key={`${activeTab}-${item.id}`} item={item} />
          ))
        ) : (
          <Animated.View
            entering={FadeIn.duration(300)}
            className="items-center py-[40px]"
          >
            <Text className="font-[poppins-medium] text-[16px] text-[#777]">
              No orders found
            </Text>
          </Animated.View>
        )}
      </View>
    </ScrollView>
  );
};

export default MyOrders;
