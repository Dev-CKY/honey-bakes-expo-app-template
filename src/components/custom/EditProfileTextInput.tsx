import { Text, TextInput, View } from "react-native";
import { scale } from "react-native-size-matters";

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
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Text
        style={{ width: scale(80), fontSize: scale(16) }}
        className="font-[poppins-regular] text-[#C2A26F]"
      >
        {label}
      </Text>

      <View
        style={{ flex: 1, borderBottomWidth: 1, borderBottomColor: "#E8DFC7" }}
      >
        <TextInput
          value={value}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          placeholderTextColor="#C2A26F"
          style={{ paddingBottom: scale(12), fontSize: scale(18) }}
          className="font-[poppins-medium] text-[#1F1500]"
        />
      </View>
    </View>
  );
};

export default EditProfileTextInputField;
