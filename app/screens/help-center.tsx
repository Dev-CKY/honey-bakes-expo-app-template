import React from "react";

import { ScrollView, View } from "react-native";

import { router } from "expo-router";
import { scale } from "react-native-size-matters";

// Reanimated
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";

// Hook
import { useHelpCenter } from "@/hooks/custom/useHelpCenter";

// Icons
import arrowLeft from "@/src/assets/icons/svg/arrowLeft";

// Components
import FAQAccordion from "@/src/components/custom/FAQAccordion";
import HeadingTitle from "@/src/components/custom/HeadingTitle";
import IconButtonWrapper from "@/src/components/custom/IconButtonWrapper";
import ToggleButton from "@/src/components/custom/ToggleButton";

// Data

import Routes from "@/src/components/custom/Routes";
import CONTACT_ROUTES from "@/src/data/contact-routes.data";
import { FAQS_DATA } from "@/src/data/faq-items.data";

const HelpCenter = () => {
  const { activeTab, handleToggle, animatedToggleStyle, BUTTON_WIDTH } =
    useHelpCenter();

  return (
    <ScrollView
      className="flex-1 bg-[#FFFFE3] py-[20px]"
      showsVerticalScrollIndicator={false}
      bounces={false}
      contentContainerStyle={{
        paddingBottom: scale(40),
      }}
    >
      {/* Back Button */}
      <View className="px-[20px]">
        <IconButtonWrapper icon={arrowLeft} onPress={() => router.back()} />
      </View>

      {/* Heading */}
      <View className="px-[20px]">
        <HeadingTitle size={32} title="Help Center" />
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
              title="FAQs"
              value="faqs"
              handleToggle={handleToggle}
            />

            <ToggleButton
              title="Contact Us"
              value="contact-us"
              handleToggle={handleToggle}
            />
          </View>
        </View>
      </View>

      {/* Content */}
      <Animated.View
        key={activeTab}
        entering={FadeIn.duration(500)}
        exiting={FadeOut.duration(500)}
      >
        {activeTab === "faqs" ? (
          <View className="gap-y-[4px]">
            {FAQS_DATA.map((item) => (
              <FAQAccordion key={item.id} item={item} />
            ))}
          </View>
        ) : (
          <View className="mt-[-10px]">
            <Routes data={CONTACT_ROUTES} />
          </View>
        )}
      </Animated.View>
    </ScrollView>
  );
};

export default HelpCenter;
