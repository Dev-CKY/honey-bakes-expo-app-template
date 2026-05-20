import React, { useState } from "react";
import { View } from "react-native";
import { scale } from "react-native-size-matters";
import SwitchToggle from "react-native-switch-toggle";

type SwitchProps = {
  value?: boolean;
  onChange?: (value: boolean) => void;
};

const Switch = ({ value = false, onChange }: SwitchProps) => {
  const [isOn, setIsOn] = useState(value);

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
        backgroundColorOff="#ccc"
        containerStyle={{
          width: scale(60),
          height: scale(30),
          borderRadius: scale(50),
          padding: scale(3),
          paddingLeft: scale(-5),
        }}
        circleStyle={{
          width: scale(27),
          height: scale(27),
          borderRadius: scale(20),
        }}
      />
    </View>
  );
};

export default Switch;
