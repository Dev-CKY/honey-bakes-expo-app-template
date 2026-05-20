import React, { useEffect, useState } from "react";
import { Platform, View } from "react-native";
import { scale } from "react-native-size-matters";
import SwitchToggle from "react-native-switch-toggle";

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
        containerStyle={{
          width: scale(58),
          height: scale(32),
          borderRadius: scale(50),
          padding: Platform.OS === "ios" ? scale(5) : scale(3),
          paddingLeft: isOn
            ? scale(3)
            : Platform.OS === "ios"
              ? scale(0)
              : scale(3),
        }}
        circleStyle={{
          width: scale(26),
          height: scale(26),
          borderRadius: scale(13),
        }}
      />
    </View>
  );
};

export default Switch;
