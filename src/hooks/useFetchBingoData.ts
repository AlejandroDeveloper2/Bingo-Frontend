/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

import { useAuthStore, useBingoStore } from ".";

const useFetchBingoData = () => {
  const { getGame } = useBingoStore();
  const { loggedUser } = useAuthStore();

  const location = useLocation();

  const { gameId } = location.state || {};

  useEffect(() => {
    if (loggedUser && gameId) {
      getGame(gameId, loggedUser.email);
    }

    return () => {
      axios.CancelToken.source().cancel();
    };
  }, [loggedUser, gameId]);

  return {
    gameId,
  };
};

export default useFetchBingoData;
