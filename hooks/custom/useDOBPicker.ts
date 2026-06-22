import { Dayjs } from "dayjs";
import { useCallback, useEffect, useRef, useState } from "react";
import { ScrollView } from "react-native";
import { scale } from "react-native-size-matters";

export type Screen = "calendar" | "month" | "year";

const YEAR_ROW_HEIGHT = scale(56);
const SCROLL_OFFSET = scale(180);

type Props = {
  value: Dayjs;
  onChange: (date: Dayjs) => void;
  years: number[];
};

export const useDOBPicker = ({ value, onChange, years }: Props) => {
  const [visible, setVisible] = useState(false);
  const [screen, setScreen] = useState<Screen>("calendar");

  const yearScrollRef = useRef<ScrollView>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openModal = useCallback(() => {
    setVisible(true);
    setScreen("calendar");
  }, []);

  const closeModal = useCallback(() => {
    setVisible(false);
    setScreen("calendar");
  }, []);

  const selectMonth = useCallback(
    (monthIndex: number) => {
      const newDate = value.month(monthIndex);

      onChange(newDate);

      timeoutRef.current = setTimeout(() => {
        setScreen("calendar");
      }, 120);
    },
    [value, onChange],
  );

  const selectYear = useCallback(
    (year: number) => {
      const newDate = value.year(year);

      onChange(newDate);

      timeoutRef.current = setTimeout(() => {
        setScreen("calendar");
      }, 120);
    },
    [value, onChange],
  );

  useEffect(() => {
    if (screen !== "year") return;

    const index = years.findIndex((year) => year === value.year());

    requestAnimationFrame(() => {
      yearScrollRef.current?.scrollTo({
        y: Math.max(index * YEAR_ROW_HEIGHT - SCROLL_OFFSET, 0),
        animated: true,
      });
    });
  }, [screen, years, value]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return {
    visible,
    screen,
    yearScrollRef,

    openModal,
    closeModal,

    setScreen,
    selectMonth,
    selectYear,
  };
};
