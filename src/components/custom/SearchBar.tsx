import cross from "@/src/assets/icons/svg/cross";
import search from "@/src/assets/icons/svg/search";
import React, { useState } from "react";
import {
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { SvgXml } from "react-native-svg";

type SearchBarProps = TextInputProps & {
  placeholder: string;
};

const SearchBar = ({ placeholder, ...props }: SearchBarProps) => {
  const [value, setValue] = useState("");

  return (
    <View className="h-[50px] mb-[10px] flex-row items-center rounded-full border border-[#F6F0D4] bg-[#FFFFE3] px-5">
      {/* Left Icon */}
      <View className="mr-3">
        <SvgXml xml={search} />
      </View>

      {/* Input */}
      <TextInput
        {...props}
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        placeholderTextColor="#B5A98A"
        className="flex-1 text-[14px] text-[#3E3A2F] font-[poppins-regular]"
        textAlignVertical="center"
      />

      {/* Right Icon */}
      {value.length > 0 && (
        <Animatable.View animation="fadeIn" duration={1000}>
          <TouchableOpacity
            className="ml-3"
            onPress={() => setValue("")}
            activeOpacity={0.7}
          >
            <SvgXml xml={cross} />
          </TouchableOpacity>
        </Animatable.View>
      )}
    </View>
  );
};

export default SearchBar;
