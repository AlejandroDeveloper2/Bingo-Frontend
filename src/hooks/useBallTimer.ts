import { useEffect, useState } from "react";

import useBingoStore from "./useBingoStore";

const useBallTimer = (): string => {
  const [seconds, setSeconds] = useState<number>(5);
  const { bingo, getRandomBall } = useBingoStore();

  const condition: boolean =
    bingo.winner === null &&
    bingo.gameStatus === "in-progress" &&
    bingo.randomBingoBalls.length < 75;

  useEffect(() => {
    if (condition) {
      const interval = window.setInterval(() => {
        getRandomBall(bingo._id);
      }, 5000);

      return () => window.clearInterval(interval);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [condition]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevTime) => {
        if (prevTime === 1) {
          return 5;
        } else {
          return prevTime - 1;
        }
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [seconds]);

  return `0:0${seconds}s`;
};

export default useBallTimer;
