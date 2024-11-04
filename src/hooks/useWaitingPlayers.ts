/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

import useBingoStore from "./useBingoStore";

const useWaitingPlayers = () => {
  const { bingo } = useBingoStore();
  const [minPlayers] = useState<number>(3);

  const [remaningPlayers, setRemainingPlayers] = useState<number>(0);

  const updateRemaningPlayers = () => {
    setRemainingPlayers(() => {
      if (bingo.players.length > 3) return 0;
      return minPlayers - bingo.players.length;
    });
  };

  useEffect(() => {
    updateRemaningPlayers();
  }, [bingo.players]);

  return remaningPlayers;
};

export default useWaitingPlayers;
