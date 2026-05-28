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
      className="overflow-hidden border-b border-[#D8D1BA] px-[20px]"
    >
      <Pressable
        onPress={handleToggle}
        className="flex-row items-center justify-between py-[15px]"
      >
        <Text className="flex-1 pr-[16px] font-[poppins-medium] text-[16px]  text-[#1F1500]">
          {item.id}. {item.question}
        </Text>

        <Animated.View style={animatedIconStyle}>
          <SvgXml xml={plus} />
        </Animated.View>
      </Pressable>

      {expanded && (
        <Animated.View
          entering={FadeIn.duration(200)}
          exiting={FadeOut.duration(200)}
          layout={LinearTransition.springify()}
          className="pb-[18px]"
        >
          <Text className="font-[poppins-regular] text-[14px] leading-[22px] text-[#6B645C]">
            {item.answer}
          </Text>
        </Animated.View>
      )}
    </Animated.View>
  );
};

export default FAQAccordion;
