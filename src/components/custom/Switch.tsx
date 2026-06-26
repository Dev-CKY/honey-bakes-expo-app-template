import React, { useEffect, useState } from "react";
import { Platform, View } from "react-native";
import SwitchToggle from "react-native-switch-toggle";
import styles from "../../styles/components/switch.styles";

type SwitchProps = {
  value?: boolean;
  onChange?: (value: boolean) => void;
};

const Switch = ({ value = false, onChange }: SwitchProps) => {
  const [isOn, setIsOn] = useState(value);

  useEffect(() => {
    setIsOn(value);
  }, [value]);

  const handleToggle = () => {
    const newValue = !isOn;

    setIsOn(newValue);
    onChange?.(newValue);
  };

  return (
    <View>
      <SwitchToggle
        switchOn={isOn}
        onPress={handleToggle}
        circleColorOff="#FFFFFF"
        circleColorOn="#FFFFFF"
        backgroundColorOn="#F7BC5D"
        backgroundColorOff="#D1D5DB"
        containerStyle={[
          styles.containerStyle,
          { paddingLeft: isOn ? 3 : Platform.OS === "ios" ? 0 : 3 },
        ]}
        circleStyle={styles.circleStyle}
      />
    </View>
  );
};

export default Switch;
