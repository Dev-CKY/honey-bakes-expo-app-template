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
import styles from "../../styles/components/searchBar.styles";

type SearchBarProps = TextInputProps & {
  placeholder: string;
  searchValue?: string;
};

const SearchBar = ({ placeholder, searchValue, ...props }: SearchBarProps) => {
  const [value, setValue] = useState(searchValue || "");

  return (
    <View style={styles.container}>
      {/* Left Icon */}
      <View style={styles.leftIcon}>
        <SvgXml xml={search} width={24} height={24} />
      </View>

      {/* Input */}
      <TextInput
        {...props}
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        placeholderTextColor="#B5A98A"
        style={styles.input}
        textAlignVertical="center"
      />

      {/* Right Icon */}
      {value.length > 0 && (
        <Animatable.View animation="fadeIn" duration={1000}>
          <TouchableOpacity onPress={() => setValue("")} activeOpacity={0.7}>
            <View style={styles.rightIcon}>
              <SvgXml xml={cross} />
            </View>
          </TouchableOpacity>
        </Animatable.View>
      )}
    </View>
  );
};

export default SearchBar;
