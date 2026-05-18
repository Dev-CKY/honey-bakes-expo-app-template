import React from "react";
import { Text, TouchableOpacity } from "react-native";

import { useOtpTimer } from "@/hooks/custom/useOtpTimer";

const OtpTimer = () => {
  const { expired, formattedTime, handleResend } = useOtpTimer();

  return expired ? (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={handleResend}
      className="self-end mb-[20px]"
    >
      <Text className="text-[#1F1500] text-[14px] font-[poppins-medium]">
        Resend OTP
      </Text>
    </TouchableOpacity>
  ) : (
    <Text className="text-[#C2A26F] text-[14px] font-[poppins-regular] self-end mb-[20px]">
      OTP expires in{" "}
      <Text className="text-[#1F1500] font-[poppins-medium]">
        {formattedTime}
      </Text>
    </Text>
  );
};

export default OtpTimer;
