import { Image } from "react-native";
import { View } from "react-native-animatable";
import Animated from "react-native-reanimated";
import styles from "../../styles/components/bannerItem.styles";

export const BannerItem = ({ item }: any) => {
  return (
    <View style={styles.wrapper}>
      <Animated.View style={styles.full}>
        <Image source={item.image} resizeMode="contain" style={styles.full} />
      </Animated.View>
    </View>
  );
};
