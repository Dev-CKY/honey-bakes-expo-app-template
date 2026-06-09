import dayjs, { Dayjs } from "dayjs";
import React from "react";
import { Modal, Pressable, ScrollView, Text, View } from "react-native";
import Animated, {
  FadeIn,
  FadeOut,
  LinearTransition,
  ZoomIn,
} from "react-native-reanimated";
import DateTimePicker from "react-native-ui-datepicker";

import { useDOBPicker } from "@/hooks/custom/useDOBPicker";
import { useMonths } from "@/hooks/custom/useMonths";
import { useYears } from "@/hooks/custom/useYears";

type Props = {
  value: Dayjs;
  onChange: (date: Dayjs) => void;
};

const DOBPicker = ({ value, onChange }: Props) => {
  const months = useMonths();
  const years = useYears();

  const {
    visible,
    screen,
    yearScrollRef,
    openModal,
    closeModal,
    setScreen,
    selectMonth,
    selectYear,
  } = useDOBPicker({
    value,
    onChange,
    years,
  });

  return (
    <>
      <Pressable onPress={openModal} className="flex-row items-center">
        <Text className="w-[80px] text-[16px] font-[poppins-regular] text-[#C2A26F]">
          DOB
        </Text>

        <View className="flex-1 flex-row justify-between">
          {["DD", "MM", "YYYY"].map((format) => (
            <View
              key={format}
              className="w-[80px] items-center justify-center border-b border-[#E8DDB6] pb-[10px]"
            >
              <Text className="font-[poppins-medium] text-[18px] text-[#1F1500]">
                {value.format(format)}
              </Text>
            </View>
          ))}
        </View>
      </Pressable>

      <Modal
        visible={visible}
        transparent
        animationType="fade"
        onRequestClose={closeModal}
      >
        <View className="flex-1 items-center justify-center bg-black/40 px-5">
          <Animated.View
            entering={FadeIn.duration(250)}
            layout={LinearTransition.springify()}
            className="w-full rounded-[24px] bg-white p-5"
          >
            {screen === "calendar" && (
              <Animated.View
                entering={FadeIn.duration(250)}
                exiting={FadeOut.duration(180)}
                layout={LinearTransition.springify()}
              >
                <View className="mb-5 flex-row justify-center gap-x-4">
                  <Pressable
                    onPress={() => setScreen("month")}
                    className="rounded-full border border-[#E8DDB6] px-4 py-2"
                  >
                    <Text className="font-[poppins-medium] text-[#1F1500]">
                      {value.format("MMMM")} ▼
                    </Text>
                  </Pressable>

                  <Pressable
                    onPress={() => setScreen("year")}
                    className="rounded-full border border-[#E8DDB6] px-4 py-2"
                  >
                    <Text className="font-[poppins-medium] text-[#1F1500]">
                      {value.format("YYYY")} ▼
                    </Text>
                  </Pressable>
                </View>

                <DateTimePicker
                  mode="single"
                  date={value.toDate()}
                  maxDate={new Date()}
                  disableMonthPicker
                  disableYearPicker
                  styles={{
                    selected: {
                      backgroundColor: "#F7BC5D",
                      borderRadius: 999,
                    },
                    selected_label: {
                      color: "#1F1500",
                      fontWeight: "600",
                    },
                    today: {
                      borderWidth: 1,
                      borderColor: "#F7BC5D",
                      borderRadius: 999,
                    },
                  }}
                  onChange={({ date }) => {
                    if (date) {
                      onChange(dayjs(date));
                    }
                  }}
                />

                <Pressable
                  onPress={closeModal}
                  className="mt-5 h-[56px] items-center justify-center rounded-full bg-[#F7BC5D]"
                >
                  <Text className="font-[poppins-medium] text-[16px] text-[#1F1500]">
                    Done
                  </Text>
                </Pressable>
              </Animated.View>
            )}

            {screen === "month" && (
              <Animated.View
                entering={FadeIn.duration(250)}
                exiting={FadeOut.duration(180)}
                layout={LinearTransition.springify()}
              >
                <Text className="mb-5 text-center font-[poppins-medium] text-[20px] text-[#1F1500]">
                  Select Month
                </Text>

                <View className="flex-row flex-wrap">
                  {months.map((month, index) => {
                    const selected = index === value.month();

                    return (
                      <Pressable
                        key={month}
                        className="mb-3 w-1/3 px-2"
                        onPress={() => selectMonth(index)}
                      >
                        <Animated.View
                          entering={ZoomIn.duration(180)}
                          layout={LinearTransition.springify()}
                          className={`rounded-full py-3 ${
                            selected
                              ? "bg-[#F7BC5D]"
                              : "border border-[#E8DDB6]"
                          }`}
                        >
                          <Text
                            className={`text-center ${
                              selected ? "font-[poppins-medium]" : ""
                            }`}
                          >
                            {month.slice(0, 3)}
                          </Text>
                        </Animated.View>
                      </Pressable>
                    );
                  })}
                </View>
              </Animated.View>
            )}

            {screen === "year" && (
              <Animated.View
                entering={FadeIn.duration(250)}
                exiting={FadeOut.duration(180)}
                layout={LinearTransition.springify()}
              >
                <Text className="mb-5 text-center font-[poppins-medium] text-[20px] text-[#1F1500]">
                  Select Year
                </Text>

                <ScrollView
                  ref={yearScrollRef}
                  className="max-h-[400px]"
                  showsVerticalScrollIndicator={false}
                >
                  {years.map((year) => {
                    const selected = year === value.year();

                    return (
                      <Pressable
                        key={year}
                        className="py-4"
                        onPress={() => selectYear(year)}
                      >
                        <Animated.Text
                          entering={ZoomIn.duration(180)}
                          layout={LinearTransition.springify()}
                          className={`text-center text-[18px] ${
                            selected
                              ? "font-[poppins-semibold] text-[#F7BC5D]"
                              : "text-[#1F1500]"
                          }`}
                        >
                          {year}
                        </Animated.Text>
                      </Pressable>
                    );
                  })}
                </ScrollView>
              </Animated.View>
            )}
          </Animated.View>
        </View>
      </Modal>
    </>
  );
};

export default DOBPicker;
