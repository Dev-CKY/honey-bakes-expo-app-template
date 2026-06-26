import React, { ReactNode, useState } from "react";
import {
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "../../styles/components/textInputField.styles";

type TextInputFieldProps = TextInputProps & {
  isEncrypted?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  eyeOpenIcon?: ReactNode;
  eyeCloseIcon?: ReactNode;
  keyboardType?: TextInputProps["keyboardType"];
};

const TextInputField = ({
  isEncrypted = false,
  leftIcon,
  rightIcon,
  eyeOpenIcon,
  eyeCloseIcon,
  placeholder,
  keyboardType,
  ...props
}: TextInputFieldProps) => {
  const [secureText, setSecureText] = useState(isEncrypted);

  return (
    <View style={styles.container}>
      {/* Left Icon */}
      {leftIcon && <View style={styles.leftIcon}>{leftIcon}</View>}

      {/* Input */}
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#B5A98A"
        secureTextEntry={secureText}
        style={styles.input}
        textAlignVertical="center"
        {...props}
        keyboardType={keyboardType}
      />

      {/* Password Toggle */}
      {isEncrypted ? (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setSecureText(!secureText)}
          style={styles.rightIcon}
        >
          {secureText ? eyeCloseIcon : eyeOpenIcon}
        </TouchableOpacity>
      ) : (
        rightIcon && <View style={styles.rightIcon}>{rightIcon}</View>
      )}
    </View>
  );
};

export default TextInputField;
