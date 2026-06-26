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
import styles from "../../styles/components/faqAccordion.styles";

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
      style={styles.container}
    >
      <Pressable onPress={handleToggle} style={styles.header}>
        <Text style={styles.question}>
          {item.id}. {item.question}
        </Text>

        <Animated.View style={animatedIconStyle}>
          <SvgXml xml={plus} width={20} height={20} />
        </Animated.View>
      </Pressable>

      {expanded && (
        <Animated.View
          entering={FadeIn.duration(200)}
          exiting={FadeOut.duration(200)}
          layout={LinearTransition.springify()}
        >
          <Text style={styles.answer}>{item.answer}</Text>
        </Animated.View>
      )}
    </Animated.View>
  );
};

export default FAQAccordion;
