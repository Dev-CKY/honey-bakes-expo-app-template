// src/components/ui/TextInputField.tsx

import React, { ReactNode, useState } from "react";
import {
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";

type TextInputFieldProps = TextInputProps & {
  isPassword?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  eyeOpenIcon?: ReactNode;
  eyeCloseIcon?: ReactNode;
};

const TextInputField = ({
  isPassword = false,
  leftIcon,
  rightIcon,
  eyeOpenIcon,
  eyeCloseIcon,
  placeholder,
  ...props
}: TextInputFieldProps) => {
  const [secureText, setSecureText] = useState(isPassword);

  return (
    <View className="h-[60px] mb-[10px] flex-row items-center rounded-full border border-[#F6F0D4] border-width-[1.5px] bg-[#FFFFE3] px-5">
      {/* Left Icon */}
      {leftIcon && <View className="mr-3">{leftIcon}</View>}

      {/* Input */}
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#B5A98A"
        secureTextEntry={secureText}
        className="flex-1 text-[16px] text-[#3E3A2F]"
        textAlignVertical="center"
        {...props}
      />

      {/* Password Toggle */}
      {isPassword ? (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setSecureText(!secureText)}
          className="ml-3"
        >
          {secureText ? eyeCloseIcon : eyeOpenIcon}
        </TouchableOpacity>
      ) : (
        rightIcon && <View className="ml-3">{rightIcon}</View>
      )}
    </View>
  );
};

export default TextInputField;
