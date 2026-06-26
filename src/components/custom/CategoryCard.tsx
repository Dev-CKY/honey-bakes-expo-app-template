import React from "react";
import { Image, Pressable, Text } from "react-native";
import styles from "../../styles/components/categoryCard.styles";

interface Props {
  title: string;
  image: any;
  onPress?: () => void;
}

const CategoryCard = ({ title, image, onPress }: Props) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <Image source={image} resizeMode="contain" style={styles.image} />
    </Pressable>
  );
};

export default CategoryCard;
