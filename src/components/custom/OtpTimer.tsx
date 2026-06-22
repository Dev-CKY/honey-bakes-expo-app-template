import React from "react";
import { Text, TouchableOpacity } from "react-native";

import { useOtpTimer } from "@/hooks/custom/useOtpTimer";
import { scale } from "react-native-size-matters";

const OtpTimer = () => {
  const { expired, formattedTime, handleResend } = useOtpTimer();

  return expired ? (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={handleResend}
      className="self-end mb-[20px]"
      style={{ marginBottom: scale(20) }}
    >
      <Text
        className="text-[#1F1500] font-[poppins-medium]"
        style={{ fontSize: scale(14) }}
      >
        Resend OTP
      </Text>
    </TouchableOpacity>
  ) : (
    <Text
      className="text-[#C2A26F] font-[poppins-regular] self-end"
      style={{ marginBottom: scale(20), fontSize: scale(14) }}
    >
      OTP expires in{" "}
      <Text className="text-[#1F1500] font-[poppins-medium]">
        {formattedTime}
      </Text>
    </Text>
  );
};

export default OtpTimer;
