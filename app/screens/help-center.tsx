import { router } from "expo-router";
import React from "react";
import { ScrollView, View } from "react-native";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";

// Hook
import { useHelpCenter } from "@/hooks/custom/useHelpCenter";

// Icons
import arrowLeft from "@/src/assets/icons/svg/arrowLeft";

// Components
import FAQAccordion from "@/src/components/custom/FAQAccordion";
import HeadingTitle from "@/src/components/custom/HeadingTitle";
import IconButtonWrapper from "@/src/components/custom/IconButtonWrapper";
import Routes from "@/src/components/custom/Routes";
import ToggleButton from "@/src/components/custom/ToggleButton";

// Data
import CONTACT_ROUTES from "@/src/data/contact-routes.data";
import { FAQS_DATA } from "@/src/data/faq-items.data";
import styles from "@/src/styles/screens/helpCenter.styles";

const HelpCenter = () => {
  const { activeTab, handleToggle, animatedToggleStyle, BUTTON_WIDTH } =
    useHelpCenter();

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollContent}
    >
      {/* Back Button */}
      <View style={styles.horizontalPadding}>
        <IconButtonWrapper icon={arrowLeft} onPress={() => router.back()} />
      </View>

      {/* Heading */}
      <View style={styles.horizontalPadding}>
        <HeadingTitle size={32} title="Help Center" />
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
          <View style={styles.faqContainer}>
            {FAQS_DATA.map((item) => (
              <FAQAccordion key={item.id} item={item} />
            ))}
          </View>
        ) : (
          <View style={styles.contactContainer}>
            <Routes data={CONTACT_ROUTES} />
          </View>
        )}
      </Animated.View>
    </ScrollView>
  );
};

export default HelpCenter;
