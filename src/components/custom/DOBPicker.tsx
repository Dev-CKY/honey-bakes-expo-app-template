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
import { scale } from "react-native-size-matters";
import { styles } from "../../styles/components/DOBPicker.styles";

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
      <Pressable onPress={openModal} style={styles.triggerContainer}>
        <Text style={styles.label}>DOB</Text>

        <View style={styles.dateContainer}>
          {["DD", "MM", "YYYY"].map((format) => (
            <View key={format} style={styles.dateItem}>
              <Text style={styles.dateText}>{value.format(format)}</Text>
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
        <View style={styles.modalOverlay}>
          <Animated.View
            entering={FadeIn.duration(250)}
            layout={LinearTransition.springify()}
            style={styles.modalContainer}
          >
            {screen === "calendar" && (
              <Animated.View
                entering={FadeIn.duration(250)}
                exiting={FadeOut.duration(180)}
                layout={LinearTransition.springify()}
              >
                <View style={styles.headerContainer}>
                  <Pressable
                    onPress={() => setScreen("month")}
                    style={styles.selectorButton}
                  >
                    <Text style={styles.selectorButtonText}>
                      {value.format("MMMM")} ▼
                    </Text>
                  </Pressable>

                  <Pressable
                    onPress={() => setScreen("year")}
                    style={styles.selectorButton}
                  >
                    <Text style={styles.selectorButtonText}>
                      {value.format("YYYY")} ▼
                    </Text>
                  </Pressable>
                </View>

                <DateTimePicker
                  mode="single"
                  date={value.toDate()}
                  maxDate={new Date()}
                  hideHeader
                  disableMonthPicker
                  disableYearPicker
                  styles={{
                    day_label: {
                      fontSize: scale(14),
                      lineHeight: scale(14),
                      textAlign: "center",
                      fontFamily: "poppins-medium",
                    },

                    selected_label: {
                      fontSize: scale(14),
                      fontFamily: "poppins-medium",
                      color: "#1F1500",
                    },

                    today_label: {
                      fontSize: scale(14),
                      fontFamily: "poppins-medium",
                    },

                    weekday_label: {
                      fontSize: scale(14),
                      fontFamily: "poppins-medium",
                      color: "#1F1500",
                    },

                    month_label: {
                      fontSize: scale(18),
                      color: "#1F1500",
                    },

                    selected: {
                      backgroundColor: "#F7BC5D",
                      borderRadius: 999,
                    },

                    today: {
                      borderWidth: scale(1.5),
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

                <Pressable onPress={closeModal} style={styles.doneButton}>
                  <Text style={styles.doneButtonText}>Done</Text>
                </Pressable>
              </Animated.View>
            )}

            {screen === "month" && (
              <Animated.View
                entering={FadeIn.duration(250)}
                exiting={FadeOut.duration(180)}
                layout={LinearTransition.springify()}
              >
                <Text style={styles.sectionTitle}>Select Month</Text>

                <View style={styles.monthsContainer}>
                  {months.map((month, index) => {
                    const selected = index === value.month();

                    return (
                      <Pressable
                        key={month}
                        onPress={() => selectMonth(index)}
                        style={styles.monthPressable}
                      >
                        <Animated.View
                          entering={ZoomIn.duration(180)}
                          layout={LinearTransition.springify()}
                          style={[
                            styles.monthItem,
                            selected
                              ? styles.monthItemSelected
                              : styles.monthItemUnselected,
                          ]}
                        >
                          <Text
                            style={[
                              styles.monthText,
                              selected && styles.monthTextSelected,
                            ]}
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
                <Text style={styles.yearTitle}>Select Year</Text>

                <ScrollView
                  ref={yearScrollRef}
                  style={styles.yearScrollView}
                  showsVerticalScrollIndicator={false}
                >
                  {years.map((year) => {
                    const selected = year === value.year();

                    return (
                      <Pressable
                        key={year}
                        style={styles.yearItem}
                        onPress={() => selectYear(year)}
                      >
                        <Animated.Text
                          entering={ZoomIn.duration(180)}
                          layout={LinearTransition.springify()}
                          style={[
                            styles.yearText,
                            selected && styles.yearTextSelected,
                          ]}
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
