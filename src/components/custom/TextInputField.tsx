import React, { ReactNode, useState } from "react";
import {
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";
import { scale } from "react-native-size-matters";

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
    <View
      className="flex-row items-center bg-[#FFFFE3] border-[#F6F0D4]"
      style={{
        height: scale(60),
        marginBottom: scale(10),
        borderRadius: scale(30),
        borderWidth: scale(1.5),
        paddingHorizontal: scale(20),
      }}
    >
      {/* Left Icon */}
      {leftIcon && <View style={{ marginRight: scale(12) }}>{leftIcon}</View>}

      {/* Input */}
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#B5A98A"
        secureTextEntry={secureText}
        className="flex-1 font-[poppins-regular] text-[#3E3A2F]"
        style={{ fontSize: scale(14) }}
        textAlignVertical="center"
        {...props}
        keyboardType={keyboardType}
      />

      {/* Password Toggle */}
      {isEncrypted ? (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setSecureText(!secureText)}
          style={{ marginLeft: scale(12) }}
        >
          {secureText ? eyeCloseIcon : eyeOpenIcon}
        </TouchableOpacity>
      ) : (
        rightIcon && <View style={{ marginLeft: scale(12) }}>{rightIcon}</View>
      )}
    </View>
  );
};

export default TextInputField;
