/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

import useBingoStore from "./useBingoStore";

const useStartingTimer = (): string => {
  const [seconds, setSeconds] = useState<number>(60);

  const { bingo } = useBingoStore();

  useEffect(() => {
    if (bingo.players.length === 3) {
      const interval = window.setInterval(() => {
        if (seconds > 0) {
          setSeconds((prevSeconds) => prevSeconds - 1);
        }
      }, 1000);
      return () => window.clearInterval(interval);
    }
  }, [bingo.players]);

  return seconds === 60
    ? `1:00s`
    : seconds < 60 && seconds >= 10
    ? `0:${seconds}s`
    : `0:0${seconds}s`;
};

export default useStartingTimer;
