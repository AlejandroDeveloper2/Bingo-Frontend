/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

import { useAuthStore, useBingoStore } from ".";
import { toast } from "react-toastify";

const usePlayBingo = (): void => {
  const { gameId } = useParams();
  const { bingo, resetBingoGame, updateGameStatus } = useBingoStore();
  const { loggedUser } = useAuthStore();

  const navigate = useNavigate();

  /**Actualiza el estado de bingo */
  useEffect(() => {
    if (gameId) updateGameStatus(gameId, "in-progress");
    return () => {
      axios.CancelToken.source().cancel();
    };
  }, [gameId]);

  /** Si no hay un jugadores y el juego esta en progreso resetea el bingo */
  useEffect(() => {
    if (
      bingo.players.length === 0 &&
      bingo.gameStatus === "in-progress" &&
      gameId
    ) {
      resetBingoGame(gameId);
      updateGameStatus(gameId, "unstart");
    }
  }, [bingo.players, bingo.gameStatus, gameId]);

  /** Verifica si hay un ganador y si lo hay termina el juego */
  useEffect(() => {
    if (bingo.winner && gameId) {
      if (loggedUser)
        toast.success(
          loggedUser.email === bingo.winner.email
            ? `¡Has ganado ${loggedUser.name}!`
            : `Ha ganado el jugador ${bingo.winner.name}`
        );

      updateGameStatus(gameId, "ended");
      window.setTimeout(() => {
        resetBingoGame(gameId).then(() => navigate("/home"));
        updateGameStatus(gameId, "unstart");
      }, 3000);
    }
    return () => {
      axios.CancelToken.source().cancel();
    };
  }, [bingo.winner, gameId]);
};

export default usePlayBingo;
