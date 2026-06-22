import { Image } from "react-native";
import { View } from "react-native-animatable";
import Animated from "react-native-reanimated";

export const BannerItem = ({ item }: any) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
      }}
    >
      <Animated.View className="w-full h-full">
        <Image
          source={item.image}
          resizeMode="contain"
          className="w-full h-full"
        />
      </Animated.View>
    </View>
  );
};
