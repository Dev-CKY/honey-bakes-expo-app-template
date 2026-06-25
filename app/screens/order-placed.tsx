import { useOrderPlaced } from "@/hooks/custom/useOrderPlaced";
import arrowLeft from "@/src/assets/icons/svg/arrowLeft";
import IconButtonWrapper from "@/src/components/custom/IconButtonWrapper";
import styles from "@/src/styles/screens/orderPlaced.styles";
import { router } from "expo-router";
import React from "react";
import { ImageBackground, View } from "react-native";
import Animated, {
  FadeIn,
  FadeInDown,
  FadeInUp,
} from "react-native-reanimated";

const OrderPlaced = () => {
  const { circleAnimatedStyle, AnimatedImage } = useOrderPlaced();

  return (
    <View style={styles.container}>
      {/* Top Banner */}
      <Animated.View entering={FadeIn.duration(600)}>
        <ImageBackground
          source={require("@/src/assets/images/custom/flags.png")}
          resizeMode="cover"
          style={styles.banner}
        >
          <View style={styles.bannerContent}>
            <IconButtonWrapper icon={arrowLeft} onPress={() => router.back()} />
          </View>
        </ImageBackground>
      </Animated.View>

      {/* Success Section */}
      <View style={styles.successContainer}>
        <Animated.View
          entering={FadeInUp.delay(250).duration(700)}
          style={[circleAnimatedStyle, styles.successCircle]}
        >
          <AnimatedImage
            entering={FadeIn.delay(500).duration(500)}
            source={require("@/src/assets/images/custom/icons/truck_tick.png")}
            resizeMode="contain"
            style={styles.successIcon}
          />
        </Animated.View>

        <Animated.Text
          entering={FadeInDown.delay(500).duration(600)}
          style={styles.successTitle}
        >
          Hurray! order placed!
        </Animated.Text>

        <Animated.Text
          entering={FadeInDown.delay(700).duration(600)}
          style={styles.successDescription}
        >
          Congratulations! order{"\n"}
          placed successfully
        </Animated.Text>
      </View>
    </View>
  );
};

export default OrderPlaced;
