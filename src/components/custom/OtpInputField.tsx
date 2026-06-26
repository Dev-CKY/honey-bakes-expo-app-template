import React, { useState } from "react";
import { Text, View } from "react-native";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import styles from "../../styles/components/otpInputField.styles";

const CELL_COUNT = 4;

const OtpInputField = () => {
  const [value, setValue] = useState("");

  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });

  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <View style={styles.wrapper}>
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.root}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({ index, symbol, isFocused }) => (
          <View
            key={index}
            onLayout={getCellOnLayoutHandler(index)}
            style={[
              styles.cell,
              isFocused ? styles.cellFocused : styles.cellDefault,
            ]}
          >
            <Text style={styles.text}>
              {symbol || (isFocused ? <Cursor /> : "0")}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default OtpInputField;
