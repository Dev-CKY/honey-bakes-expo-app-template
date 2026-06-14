import { Image } from "react-native";
import { View } from "react-native-animatable";
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";

export const BannerItem = ({ item, animationValue }: any) => {
  const cardStyle = useAnimatedStyle(() => {
    const scaleValue = interpolate(
      animationValue.value,
      [-1, 0, 1],
      [0.82, 1, 0.82],
      Extrapolation.CLAMP,
    );

    const opacity = interpolate(
      animationValue.value,
      [-1, 0, 1],
      [0.45, 1, 0.45],
      Extrapolation.CLAMP,
    );

    const rotateY = interpolate(
      animationValue.value,
      [-1, 0, 1],
      [-18, 0, 18],
      Extrapolation.CLAMP,
    );

    const translateY = interpolate(
      animationValue.value,
      [-1, 0, 1],
      [18, 0, 18],
      Extrapolation.CLAMP,
    );

    return {
      opacity,
      transform: [
        { perspective: 1000 },
        { scale: scaleValue },
        { rotateY: `${rotateY}deg` },
        { translateY },
      ],
    };
  });

  const glowStyle = useAnimatedStyle(() => {
    const glowOpacity = interpolate(
      animationValue.value,
      [-1, 0, 1],
      [0, 0.22, 0],
      Extrapolation.CLAMP,
    );

    const glowScale = interpolate(
      animationValue.value,
      [-1, 0, 1],
      [0.8, 1.15, 0.8],
      Extrapolation.CLAMP,
    );

    return {
      opacity: glowOpacity,
      transform: [{ scale: glowScale }],
    };
  });

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
      }}
    >
      <Animated.View style={cardStyle}>
        <Image
          source={item.image}
          resizeMode="cover"
          className="w-full h-[220px] rounded-[10px]"
        />
      </Animated.View>
    </View>
  );
};
