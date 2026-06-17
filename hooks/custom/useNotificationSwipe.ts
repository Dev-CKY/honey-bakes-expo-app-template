import { Gesture } from "react-native-gesture-handler";
import {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { scheduleOnRN } from "react-native-worklets";

const DELETE_THRESHOLD = -120;

type Props = {
  id: number | string;
  isDeletingAll: boolean;
  onDelete: (id: number | string) => void;
};

export const useNotificationSwipe = ({
  id,
  isDeletingAll,
  onDelete,
}: Props) => {
  const translateX = useSharedValue(0);

  const removeItem = () => {
    onDelete(id);
  };

  const panGesture = Gesture.Pan()
    .enabled(!isDeletingAll)
    .activeOffsetX([-15, 15])
    .onUpdate((event) => {
      if (event.translationX < 0) {
        translateX.value = event.translationX;
      }
    })
    .onEnd((event) => {
      const shouldDelete =
        translateX.value < DELETE_THRESHOLD || event.velocityX < -1000;

      if (shouldDelete) {
        translateX.value = withTiming(
          -500,
          {
            duration: 350,
          },
          (finished) => {
            if (finished) {
              scheduleOnRN(removeItem);
            }
          },
        );
      } else {
        translateX.value = withSpring(0, {
          damping: 18,
          stiffness: 180,
        });
      }
    });

  const cardStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  const deleteBgStyle = useAnimatedStyle(() => ({
    opacity: interpolate(translateX.value, [0, -120], [0, 1]),
  }));

  return {
    panGesture,
    cardStyle,
    deleteBgStyle,
  };
};
