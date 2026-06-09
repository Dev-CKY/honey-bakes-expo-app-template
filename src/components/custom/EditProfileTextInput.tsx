import { Text, TextInput, View } from "react-native";

type EditProfileTextInputFieldProps = {
  label: string;
  value: string;
  onChangeText: (v: string) => void;
  keyboardType?: any;
};

const EditProfileTextInputField = ({
  label,
  value,
  onChangeText,
  keyboardType,
}: EditProfileTextInputFieldProps) => {
  return (
    <View className="flex-row items-center">
      <Text className="w-[80px] text-[16px] font-[poppins-regular] text-[#C2A26F]">
        {label}
      </Text>

      <View className="flex-1 border-b border-[#E8DFC7]">
        <TextInput
          value={value}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          placeholderTextColor="#C2A26F"
          className="pb-[12px] text-[18px] font-[poppins-medium] text-[#1F1500]"
        />
      </View>
    </View>
  );
};

export default EditProfileTextInputField;
