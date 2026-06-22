import { useFAQ } from "@/hooks/custom/useFAQ";
import plus from "@/src/assets/icons/svg/plus";
import React from "react";

import { Pressable, Text } from "react-native";

// Reanimated
import Animated, {
  FadeIn,
  FadeOut,
  LinearTransition,
} from "react-native-reanimated";
import { scale } from "react-native-size-matters";
import { SvgXml } from "react-native-svg";

type FAQAccordionProps = {
  item: {
    id: number;
    question: string;
    answer: string;
  };
};

const FAQAccordion = ({ item }: FAQAccordionProps) => {
  const { handleToggle, animatedIconStyle, expanded } = useFAQ();

  return (
    <Animated.View
      layout={LinearTransition.springify()}
      style={{
        overflow: "hidden",
        borderBottomWidth: 1,
        borderBottomColor: "#D8D1BA",
        paddingHorizontal: scale(20),
      }}
    >
      <Pressable
        onPress={handleToggle}
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingVertical: scale(15),
        }}
      >
        <Text
          style={{ flex: 1, paddingRight: scale(16), fontSize: scale(16) }}
          className="font-[poppins-medium] text-[#1F1500]"
        >
          {item.id}. {item.question}
        </Text>

        <Animated.View style={animatedIconStyle}>
          <SvgXml xml={plus} width={scale(20)} height={scale(20)} />
        </Animated.View>
      </Pressable>

      {expanded && (
        <Animated.View
          entering={FadeIn.duration(200)}
          exiting={FadeOut.duration(200)}
          layout={LinearTransition.springify()}
          style={{ paddingBottom: scale(18) }}
        >
          <Text
            style={{ fontSize: scale(14), lineHeight: scale(22) }}
            className="font-[poppins-regular] text-[#6B645C]"
          >
            {item.answer}
          </Text>
        </Animated.View>
      )}
    </Animated.View>
  );
};

export default FAQAccordion;
