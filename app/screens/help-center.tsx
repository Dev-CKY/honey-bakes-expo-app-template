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
      className="flex-1 bg-[#FFFFE3]"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingBottom: scale(40),
      }}
      style={{ paddingVertical: scale(20) }}
    >
      {/* Back Button */}
      <View style={{ paddingHorizontal: scale(20) }}>
        <IconButtonWrapper icon={arrowLeft} onPress={() => router.back()} />
      </View>

      {/* Heading */}
      <View style={{ paddingHorizontal: scale(20) }}>
        <HeadingTitle size={32} title="Help Center" />
      </View>

      {/* Toggle Tabs */}
      <View style={{ padding: scale(20) }}>
        <View
          style={{
            height: scale(52),
            overflow: "hidden",
            borderRadius: scale(52) / 2,
            backgroundColor: "#F4EFD7",
            padding: scale(4),
          }}
        >
          {/* Animated Active Background */}
          <Animated.View
            style={[
              {
                position: "absolute",
                left: scale(4),
                top: scale(4),
                height: scale(44),
                borderRadius: scale(44) / 2,
                borderWidth: scale(1),
                borderColor: "#2E261C",
                backgroundColor: "#F0BA5C",
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
          <View style={{ rowGap: scale(4) }}>
            {FAQS_DATA.map((item) => (
              <FAQAccordion key={item.id} item={item} />
            ))}
          </View>
        ) : (
          <View style={{ marginTop: -scale(10) }}>
            <Routes data={CONTACT_ROUTES} />
          </View>
        )}
      </Animated.View>
    </ScrollView>
  );
};

export default HelpCenter;
