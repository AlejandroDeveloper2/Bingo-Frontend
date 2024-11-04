/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import axios from "axios";

import { useBingoStore } from ".";

const useFetchBingos = () => {
  const { games, getBingoGames } = useBingoStore();

  useEffect(() => {
    getBingoGames();
    return () => {
      axios.CancelToken.source().cancel();
    };
  }, []);

  return {
    games,
  };
};

export default useFetchBingos;
