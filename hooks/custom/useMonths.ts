import dayjs from "dayjs";
import { useMemo } from "react";

export const useMonths = () => {
  return useMemo(
    () =>
      Array.from({ length: 12 }, (_, i) =>
        dayjs().startOf("year").month(i).format("MMMM"),
      ),
    [],
  );
};
