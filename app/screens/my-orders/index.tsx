// MyOrders.tsx

import { router } from "expo-router";
import React from "react";
import { ScrollView, Text, View } from "react-native";

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
import styles from "@/src/styles/screens/myOrders.styles";

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
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.contentContainer}
    >
      {/* Back Button */}
      <View style={styles.horizontalPadding}>
        <IconButtonWrapper icon={arrowLeft} onPress={() => router.back()} />
      </View>

      {/* Heading */}
      <View style={styles.horizontalPadding}>
        <HeadingTitle size={32} title="My Orders" />
      </View>

      {/* Toggle Tabs */}
      <View style={styles.toggleContainer}>
        <View style={styles.toggleWrapper}>
          {/* Animated Active Background */}
          <Animated.View
            style={[
              styles.activeToggleBackground,
              {
                width: BUTTON_WIDTH,
              },
              animatedToggleStyle,
            ]}
          />

          {/* Toggle Buttons */}
          <View style={styles.toggleButtonsRow}>
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
      <View style={styles.horizontalPadding}>
        <SearchBar placeholder="Search orders..." searchValue="" />
      </View>

      {/* Orders List */}
      <View style={styles.ordersContainer}>
        {filteredOrders.length ? (
          filteredOrders.map((item) => (
            <OrderCard key={`${activeTab}-${item.id}`} item={item} />
          ))
        ) : (
          <Animated.View
            entering={FadeIn.duration(300)}
            style={styles.emptyStateContainer}
          >
            <Text style={styles.emptyStateText}>No orders found</Text>
          </Animated.View>
        )}
      </View>
    </ScrollView>
  );
};

export default MyOrders;
