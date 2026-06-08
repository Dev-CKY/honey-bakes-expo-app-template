import { useWishlist } from "@/hooks/custom/useWishlist";
import arrowLeft from "@/src/assets/icons/svg/arrowLeft";
import bin2 from "@/src/assets/icons/svg/bin2";
import cross from "@/src/assets/icons/svg/cross";
import Button from "@/src/components/custom/Button";
import EmptyScreenState from "@/src/components/custom/EmptyScreenState";
import HeadingTitle from "@/src/components/custom/HeadingTitle";
import IconButtonWrapper from "@/src/components/custom/IconButtonWrapper";
import { router } from "expo-router";
import React from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import Animated, { FadeOut, LinearTransition } from "react-native-reanimated";
import { SvgXml } from "react-native-svg";

const Wishlist = () => {
  const { wishlistItems, handleRemoveItem, handleClearWishlist } =
    useWishlist();

  const isEmptyWishlist = wishlistItems.length === 0;

  const wishlistEmptyImage = require("@/src/assets/images/custom/icons/heart.png");

  return (
    <ScrollView
      className="flex-1 bg-[#FFFFE3] py-[20px]"
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <View className="flex-row items-center justify-between px-[20px]">
        <IconButtonWrapper icon={arrowLeft} onPress={() => router.back()} />

        {!isEmptyWishlist && (
          <IconButtonWrapper icon={bin2} onPress={handleClearWishlist} />
        )}
      </View>

      {/* Heading */}
      <View className="px-[20px]">
        <HeadingTitle size={32} title="My Wishlist" />
      </View>

      {isEmptyWishlist ? (
        <EmptyScreenState title="Wishlist" image={wishlistEmptyImage} />
      ) : (
        <>
          {wishlistItems.map((item: any) => (
            <Animated.View
              key={item.id}
              layout={LinearTransition.springify()}
              exiting={FadeOut.duration(300)}
              className="flex-row items-start justify-between mt-[20px] border-b border-b-[1px] border-[#F6F0D4] pb-[20px]"
            >
              <View className="flex-row items-center pl-[20px]">
                <Image source={item.image} className="w-[90px] h-[90px]" />

                <View className="ml-[10px]">
                  <View className="flex-row items-center justify-between w-[250px]">
                    <Text className="text-[16px] font-[poppins-medium] text-[#1F1500]">
                      {item.name}
                    </Text>

                    <Pressable
                      className="pr-[20px]"
                      onPress={() => handleRemoveItem(item.id)}
                    >
                      <SvgXml xml={cross} width={24} height={24} />
                    </Pressable>
                  </View>

                  <Text className="text-[14px] font-[poppins-regular] text-[#C2A26F]">
                    {item.seller}
                  </Text>

                  <Text className="text-[16px] font-[poppins-medium] text-[#1F1500] mt-[10px]">
                    {item.price}
                  </Text>
                </View>
              </View>
            </Animated.View>
          ))}
        </>
      )}

      {!isEmptyWishlist && (
        <View className="px-[20px] mt-[20px]">
          <Button label="Move to Cart" onPress={() => {}} />
        </View>
      )}
    </ScrollView>
  );
};

export default Wishlist;
