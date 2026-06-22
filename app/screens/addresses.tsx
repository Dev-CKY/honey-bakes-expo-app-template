import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import Animated, {
  FadeInDown,
  interpolateColor,
  LinearTransition,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { scale } from "react-native-size-matters";
import { SvgXml } from "react-native-svg";

import arrowLeft from "@/src/assets/icons/svg/arrowLeft";
import pencil from "@/src/assets/icons/svg/pencil";

import HeadingTitle from "@/src/components/custom/HeadingTitle";
import IconButtonWrapper from "@/src/components/custom/IconButtonWrapper";
import { ADDRESS_DATA } from "@/src/data/address.data";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
const AnimatedText = Animated.createAnimatedComponent(Text);

type AddressCardProps = {
  item: (typeof ADDRESS_DATA)[number];
  isSelected: boolean;
  onPress: () => void;
};

const AddressCard = ({ item, isSelected, onPress }: AddressCardProps) => {
  const progress = useSharedValue(isSelected ? 1 : 0);

  useEffect(() => {
    progress.value = withTiming(isSelected ? 1 : 0, {
      duration: 600,
    });
  }, [isSelected, progress]);

  const animatedCardStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        progress.value,
        [0, 1],
        ["#FFFFE3", "#F7BC5D"],
      ),
      borderColor: interpolateColor(
        progress.value,
        [0, 1],
        ["#F6F0D4", "#1F1500"],
      ),
    };
  });

  const animatedDescriptionStyle = useAnimatedStyle(() => {
    return {
      color: interpolateColor(progress.value, [0, 1], ["#C0B08D", "#FFFFFF"]),
    };
  });

  return (
    <AnimatedPressable
      onPress={onPress}
      layout={LinearTransition.springify().damping(18).stiffness(180)}
      style={[
        animatedCardStyle,
        {
          marginHorizontal: scale(20),
          marginBottom: scale(20),
          minHeight: scale(150),
          borderWidth: scale(1.5),
          borderRadius: scale(10),
          padding: scale(16),
        },
      ]}
    >
      {/* Header */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{ fontSize: scale(16) }}
          className="font-[poppins-medium] text-[#1F1500]"
        >
          {item.title}
        </Text>

        <Pressable hitSlop={10}>
          <SvgXml xml={pencil} width={scale(20)} height={scale(20)} />
        </Pressable>
      </View>

      {/* Address */}
      <AnimatedText
        style={[
          animatedDescriptionStyle,
          { marginTop: scale(12), fontSize: scale(14), lineHeight: scale(22) },
        ]}
        className="font-[poppins-medium]"
      >
        {item.address}
      </AnimatedText>

      {/* Phone */}
      <View
        style={{
          marginTop: scale(10),
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text
          style={{ fontSize: scale(14) }}
          className="font-[poppins-medium] text-[#1F1500]"
        >
          Phone no :
        </Text>

        <AnimatedText
          style={[
            animatedDescriptionStyle,
            { marginLeft: scale(4), fontSize: scale(14) },
          ]}
          className="font-[poppins-medium]"
        >
          {item.phoneNumber}
        </AnimatedText>
      </View>
    </AnimatedPressable>
  );
};

const Addresses = () => {
  const [selectedId, setSelectedId] = useState<number>(1);

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
      <View style={{ marginBottom: scale(20), paddingHorizontal: scale(20) }}>
        <HeadingTitle size={32} title="My addresses" />
      </View>

      {/* Address List */}
      {ADDRESS_DATA.map((item, index) => (
        <Animated.View
          key={item.id}
          entering={FadeInDown.delay(index * 80).duration(450)}
        >
          <AddressCard
            item={item}
            isSelected={selectedId === item.id}
            onPress={() => setSelectedId(item.id)}
          />
        </Animated.View>
      ))}

      {/* Add Address */}
      <Animated.View
        entering={FadeInDown.delay(250).duration(450)}
        style={{ marginHorizontal: scale(20) }}
      >
        <Pressable
          style={{
            height: scale(50),
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: scale(50) / 2,
            borderWidth: scale(1.5),
            borderStyle: "dashed",
            borderColor: "#1F1500",
          }}
          onPress={() => router.push("/screens/add-address")}
        >
          <Text
            style={{ fontSize: scale(14) }}
            className="font-[poppins-medium] text-[#1F1500]"
          >
            Add new address
          </Text>
        </Pressable>
      </Animated.View>
    </ScrollView>
  );
};

export default Addresses;
