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
import { scale } from "react-native-size-matters";
import { SvgXml } from "react-native-svg";

const Wishlist = () => {
  const { wishlistItems, handleRemoveItem, handleClearWishlist } =
    useWishlist();

  const isEmptyWishlist = wishlistItems.length === 0;

  const wishlistEmptyImage = require("@/src/assets/images/custom/icons/heart.png");

  return (
    <ScrollView
      className="flex-1 bg-[#FFFFE3]"
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
      style={{ paddingVertical: scale(20) }}
    >
      {/* Header */}
      <View
        className="flex-row items-center justify-between"
        style={{ paddingHorizontal: scale(20) }}
      >
        <IconButtonWrapper icon={arrowLeft} onPress={() => router.back()} />

        {!isEmptyWishlist && (
          <IconButtonWrapper icon={bin2} onPress={handleClearWishlist} />
        )}
      </View>

      {/* Heading */}
      <View style={{ paddingHorizontal: scale(20) }}>
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
              className="flex-row items-start justify-between border-b border-[#F6F0D4]"
              style={{
                marginTop: scale(20),
                paddingBottom: scale(20),
                borderBottomWidth: scale(1),
                borderBottomColor: "#F6F0D4",
              }}
            >
              <View
                className="flex-row items-center"
                style={{ paddingLeft: scale(20) }}
              >
                <Image
                  source={item.image}
                  style={{ width: scale(90), height: scale(90) }}
                />

                <View style={{ marginLeft: scale(10) }}>
                  <View
                    className="flex-row items-center justify-between"
                    style={{ width: scale(250) }}
                  >
                    <Text
                      className="font-[poppins-medium] text-[#1F1500]"
                      style={{ fontSize: scale(16) }}
                    >
                      {item.name}
                    </Text>

                    <Pressable
                      onPress={() => handleRemoveItem(item.id)}
                      style={{ paddingRight: scale(20) }}
                    >
                      <SvgXml
                        xml={cross}
                        width={scale(24)}
                        height={scale(24)}
                      />
                    </Pressable>
                  </View>

                  <Text
                    className="font-[poppins-regular] text-[#C2A26F]"
                    style={{ fontSize: scale(14) }}
                  >
                    {item.seller}
                  </Text>

                  <Text
                    className="font-[poppins-medium] text-[#1F1500]"
                    style={{ fontSize: scale(16), marginTop: scale(10) }}
                  >
                    {item.price}
                  </Text>
                </View>
              </View>
            </Animated.View>
          ))}
        </>
      )}

      {!isEmptyWishlist && (
        <View style={{ paddingHorizontal: scale(20), marginTop: scale(20) }}>
          <Button label="Move to Cart" onPress={() => {}} />
        </View>
      )}
    </ScrollView>
  );
};

export default Wishlist;
