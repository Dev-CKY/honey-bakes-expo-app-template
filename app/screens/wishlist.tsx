import { useWishlist } from "@/hooks/custom/useWishlist";
import arrowLeft from "@/src/assets/icons/svg/arrowLeft";
import bin2 from "@/src/assets/icons/svg/bin2";
import cross from "@/src/assets/icons/svg/cross";
import Button from "@/src/components/custom/Button";
import EmptyScreenState from "@/src/components/custom/EmptyScreenState";
import HeadingTitle from "@/src/components/custom/HeadingTitle";
import IconButtonWrapper from "@/src/components/custom/IconButtonWrapper";
import styles from "@/src/styles/screens/wishlist.styles";
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
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <View style={styles.header}>
        <IconButtonWrapper icon={arrowLeft} onPress={() => router.back()} />

        {!isEmptyWishlist && (
          <IconButtonWrapper icon={bin2} onPress={handleClearWishlist} />
        )}
      </View>

      {/* Heading */}
      <View style={styles.headingContainer}>
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
              style={styles.wishlistItem}
            >
              <View style={styles.wishlistItemContent}>
                <Image source={item.image} style={styles.productImage} />

                <View style={styles.productInfo}>
                  <View style={styles.productHeader}>
                    <Text style={styles.productName}>{item.name}</Text>

                    <Pressable
                      onPress={() => handleRemoveItem(item.id)}
                      style={styles.removeButton}
                    >
                      <SvgXml
                        xml={cross}
                        width={scale(24)}
                        height={scale(24)}
                      />
                    </Pressable>
                  </View>

                  <Text style={styles.sellerText}>{item.seller}</Text>

                  <Text style={styles.priceText}>{item.price}</Text>
                </View>
              </View>
            </Animated.View>
          ))}
        </>
      )}

      {!isEmptyWishlist && (
        <View style={styles.buttonContainer}>
          <Button label="Move to Cart" onPress={() => {}} />
        </View>
      )}
    </ScrollView>
  );
};

export default Wishlist;
