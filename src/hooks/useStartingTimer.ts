/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import useBingoStore from "./useBingoStore";

const useStartingTimer = (): string => {
  const [seconds, setSeconds] = useState<number>(30);
  const navigate = useNavigate();

  const { bingo } = useBingoStore();

  useEffect(() => {
    if (
      bingo.players.length === 2 &&
      bingo.bingoCards.length === bingo.players.length
    ) {
      const interval = window.setInterval(() => {
        if (seconds > 0) {
          setSeconds((prevSeconds) => prevSeconds - 1);
        }
      }, 1000);
      return () => window.clearInterval(interval);
    }
  }, [bingo.players, bingo.bingoCards]);

  useEffect(() => {
    if (seconds === 0)
      navigate("/home/bingo", { state: { gameId: bingo._id } });
  }, [seconds]);

  return seconds === 60
    ? `1:00s`
    : seconds < 60 && seconds >= 10
    ? `0:${seconds}s`
    : `0:0${seconds}s`;
};

export default useStartingTimer;
