import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import styles from "../../styles/components/productGridCard.styles";

interface Props {
  title: string;
  image: any;
  price: string;
  brand: string;
  onPress?: () => void;
}

const ProductGridCard = ({ title, image, price, brand, onPress }: Props) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      {/* Image */}
      <View style={styles.imageWrapper}>
        <View style={styles.imageBox}>
          <Image source={image} resizeMode="cover" style={styles.image} />
        </View>

        {/* Add Button */}
        <Pressable style={styles.addButton}>
          <Text style={styles.addButtonText}>Add +</Text>
        </Pressable>
      </View>

      {/* Content */}
      <View style={styles.content}>
        <Text numberOfLines={1} style={styles.title}>
          {title}
        </Text>

        <Text style={styles.brand}>By {brand}</Text>

        <Text style={styles.price}>{price}</Text>
      </View>
    </Pressable>
  );
};

export default ProductGridCard;
