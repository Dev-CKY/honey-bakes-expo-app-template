import React from "react";
import { Image, Text, View } from "react-native";
import { scale } from "react-native-size-matters";
import StarRating from "react-native-star-rating-widget";

const OrderedItemCard = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        borderWidth: scale(1),
        borderColor: "#F6F0D4",
        borderRadius: scale(10),
        padding: scale(5),
      }}
    >
      {/* Item image */}
      <Image
        source={require("@/src/assets/images/custom/products/cake.jpg")}
        style={{
          width: scale(120),
          height: scale(100),
          borderRadius: scale(7),
        }}
        resizeMode="cover"
      />

      {/* Item details wrapper */}
      <View
        style={{
          marginLeft: scale(10),
          flex: 1,
          justifyContent: "space-between",
        }}
      >
        {/* Item name */}
        <Text
          style={{ fontSize: scale(16) }}
          className="text-[#1F1500] font-[poppins-medium]"
        >
          Vanilla Choco Cake
        </Text>

        {/* Seller */}
        <Text
          style={{ fontSize: scale(14) }}
          className="text-[#C2A26F] font-[poppins-regular]"
        >
          HoneyBakes
        </Text>

        {/* Rating */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: scale(4),
          }}
        >
          <StarRating
            rating={4}
            onChange={() => {}}
            starSize={scale(18)}
            color="#FFC700"
            emptyColor="#D9D9D9"
            starStyle={{ marginHorizontal: scale(1) }}
          />

          <Text
            style={{ marginLeft: scale(5), fontSize: scale(14) }}
            className="text-[#1F1500] font-[poppins-medium]"
          >
            4.0
          </Text>

          <Text
            style={{ marginLeft: scale(2), fontSize: scale(14) }}
            className="text-[#C2A26F] font-[poppins-regular]"
          >
            (1,656)
          </Text>
        </View>

        {/* Price */}
        <Text
          style={{ marginTop: scale(10), fontSize: scale(14) }}
          className="text-[#1F1500] font-[poppins-medium]"
        >
          $54.05
        </Text>
      </View>
    </View>
  );
};

export default OrderedItemCard;
