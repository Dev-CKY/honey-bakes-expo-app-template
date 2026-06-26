import React from "react";
import { Image, Text, View } from "react-native";
import StarRating from "react-native-star-rating-widget";
import styles from "../../styles/components/orderedItemCard.styles";

const OrderedItemCard = () => {
  return (
    <View style={styles.container}>
      {/* Item image */}
      <Image
        source={require("@/src/assets/images/custom/products/cake.jpg")}
        style={styles.image}
        resizeMode="cover"
      />

      {/* Item details wrapper */}
      <View style={styles.details}>
        {/* Item name */}
        <Text style={styles.title}>Vanilla Choco Cake</Text>

        {/* Seller */}
        <Text style={styles.seller}>HoneyBakes</Text>

        {/* Rating */}
        <View style={styles.ratingRow}>
          <StarRating
            rating={4}
            onChange={() => {}}
            starSize={18}
            color="#FFC700"
            emptyColor="#D9D9D9"
            starStyle={{ marginHorizontal: 1 }}
          />

          <Text style={styles.ratingText}>4.0</Text>

          <Text style={styles.reviewsText}>(1,656)</Text>
        </View>

        {/* Price */}
        <Text style={styles.price}>$54.05</Text>
      </View>
    </View>
  );
};

export default OrderedItemCard;
