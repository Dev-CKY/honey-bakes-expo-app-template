import React from "react";
import { Text, TouchableOpacity } from "react-native";

import { useOtpTimer } from "@/hooks/custom/useOtpTimer";
import styles from "../../styles/components/otpTimer.styles";

const OtpTimer = () => {
  const { expired, formattedTime, handleResend } = useOtpTimer();

  return expired ? (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={handleResend}
      style={styles.resendButton}
    >
      <Text style={styles.resendText}>Resend OTP</Text>
    </TouchableOpacity>
  ) : (
    <Text style={styles.timerText}>
      OTP expires in <Text style={styles.timerHighlight}>{formattedTime}</Text>
    </Text>
  );
};

export default OtpTimer;
