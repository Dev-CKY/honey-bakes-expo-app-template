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
  }, [isSelected]);

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
      style={animatedCardStyle}
      className="mx-[20px] mb-[20px] min-h-[150px] rounded-[10px] border-[1.5px] p-[16px]"
    >
      {/* Header */}
      <View className="flex-row items-center justify-between">
        <Text className="font-[poppins-medium] text-[16px] text-[#1F1500]">
          {item.title}
        </Text>

        <Pressable hitSlop={10}>
          <SvgXml xml={pencil} />
        </Pressable>
      </View>

      {/* Address */}
      <AnimatedText
        style={animatedDescriptionStyle}
        className="mt-[12px] text-[14px] leading-[22px] font-[poppins-medium]"
      >
        {item.address}
      </AnimatedText>

      {/* Phone */}
      <View className="mt-[10px] flex-row items-center">
        <Text className="font-[poppins-medium] text-[14px] text-[#1F1500]">
          Phone no :
        </Text>

        <AnimatedText
          style={animatedDescriptionStyle}
          className="ml-[4px] text-[14px] font-[poppins-medium]"
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
      className="flex-1 bg-[#FFFFE3] py-[20px]"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingBottom: scale(40),
      }}
    >
      {/* Back Button */}
      <View className="px-[20px]">
        <IconButtonWrapper icon={arrowLeft} onPress={() => router.back()} />
      </View>

      {/* Heading */}
      <View className="mb-[20px] px-[20px]">
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
        className="mx-[20px]"
      >
        <Pressable className="h-[50px] w-full items-center justify-center rounded-full border-[1.5px] border-dashed border-[#1F1500]">
          <Text className="font-[poppins-medium] text-[14px] text-[#1F1500]">
            Add new address
          </Text>
        </Pressable>
      </Animated.View>
    </ScrollView>
  );
};

export default Addresses;
