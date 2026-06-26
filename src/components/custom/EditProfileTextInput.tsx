import { Text, TextInput, View } from "react-native";
import styles from "../../styles/components/editProfileTextInput.styles";

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
    <View style={styles.row}>
      <Text style={styles.label}>{label}</Text>

      <View style={styles.inputWrap}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          placeholderTextColor="#C2A26F"
          style={styles.input}
        />
      </View>
    </View>
  );
};

export default EditProfileTextInputField;
