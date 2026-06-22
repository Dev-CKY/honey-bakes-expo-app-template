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
import { scale } from "react-native-size-matters";
import { SvgXml } from "react-native-svg";

type SearchBarProps = TextInputProps & {
  placeholder: string;
  searchValue?: string;
};

const SearchBar = ({ placeholder, searchValue, ...props }: SearchBarProps) => {
  const [value, setValue] = useState(searchValue || "");

  return (
    <View
      style={{
        height: scale(50),
        marginBottom: scale(10),
        paddingHorizontal: scale(20),
      }}
      className="flex-row items-center rounded-full border border-[#F6F0D4] bg-[#FFFFE3] "
    >
      {/* Left Icon */}
      <View className="mr-3">
        <SvgXml xml={search} width={scale(24)} height={scale(24)} />
      </View>

      {/* Input */}
      <TextInput
        {...props}
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        placeholderTextColor="#B5A98A"
        className="flex-1 text-[#3E3A2F] font-[poppins-regular]"
        style={{ fontSize: scale(14) }}
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
