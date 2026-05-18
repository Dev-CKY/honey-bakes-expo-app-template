import React, { useState } from "react";
import { Text, View } from "react-native";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";

const CELL_COUNT = 4;

const OtpInputField = () => {
  const [value, setValue] = useState("");

  const ref = useBlurOnFulfill({
    value,
    cellCount: CELL_COUNT,
  });

  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <View className="flex-row justify-between mb-[10px] ">
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={{
          width: "100%",
          justifyContent: "space-between",
        }}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({ index, symbol, isFocused }) => (
          <View
            key={index}
            onLayout={getCellOnLayoutHandler(index)}
            className={`h-[50px] w-[75px] items-center justify-center rounded-full border bg-[#FFFFE3]
              ${isFocused ? "border-[#3E3A2F]" : "border-[#F6F0D4]"}`}
          >
            <Text className="text-[15px] text-[#B08A52] font-[poppins-medium]">
              {symbol || (isFocused ? <Cursor /> : "0")}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default OtpInputField;
