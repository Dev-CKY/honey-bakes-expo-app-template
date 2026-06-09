import dayjs from "dayjs";
import { useMemo } from "react";

export const useYears = () => {
  return useMemo(() => {
    const currentYear = dayjs().year();

    return Array.from(
      { length: currentYear - 1900 + 1 },
      (_, i) => currentYear - i,
    );
  }, []);
};
