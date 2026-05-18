import { useEffect, useState } from "react";

type OtpTimerProps = {
  initialTime?: number;
  onResend?: () => void;
};

export const useOtpTimer = ({
  initialTime = 120,
  onResend,
}: OtpTimerProps = {}) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    if (timeLeft <= 0) {
      setExpired(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleResend = () => {
    setTimeLeft(initialTime);
    setExpired(false);

    onResend?.();
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const formattedTime = `${minutes}:${seconds.toString().padStart(2, "0")}`;

  return {
    expired,
    formattedTime,
    handleResend,
  };
};
