import { useEffect, useState } from "react";
import io, { Socket } from "socket.io-client";

import { Game } from "@interfaces/data";

import useBingoStore from "./useBingoStore";
import {
  updateBingoFullState,
  updateBingoMultiState,
  updateBingoState,
} from "@helpers/index";

const socket: Socket = io(import.meta.env.VITE_PRODUCTION_API_URL);

const useSocket = (): void => {
  const [socketEvents] = useState<string[]>([
    "updated_status",
    "joined_to_bingo",
    "leave_bingo",
    "generated_card",
    "selected_ball",
    "won_game",
    "reseted_bingo",
  ]);
  const { games, bingo, updateStoreState } = useBingoStore();

  const offSocketEvents = (): void => {
    socketEvents.forEach((event) => {
      socket.off(event);
    });
  };

  useEffect(() => {
    socket.on("updated_status", (updatedBingo: Game) => {
      const updatedGames: Game[] = updateBingoState(
        games,
        updatedBingo,
        "gameStatus"
      );
      updateStoreState<Game[]>(updatedGames, "games");
      updateStoreState<Game>({ ...bingo, ...updatedBingo }, "bingo");
    });

    socket.on("joined_to_bingo", (updatedBingo: Game) => {
      const updatedGames: Game[] = updateBingoState(
        games,
        updatedBingo,
        "players"
      );
      updateStoreState<Game[]>(updatedGames, "games");
      updateStoreState<Game>({ ...bingo, ...updatedBingo }, "bingo");
    });

    socket.on("leave_bingo", (updatedBingo: Game) => {
      const updatedGames: Game[] = updateBingoState(
        games,
        updatedBingo,
        "players"
      );
      updateStoreState<Game[]>(updatedGames, "games");
      updateStoreState<Game>({ ...bingo, ...updatedBingo }, "bingo");
    });

    socket.on("generated_card", (updatedBingo: Game) => {
      const updatedGames: Game[] = updateBingoState(
        games,
        updatedBingo,
        "bingoCards"
      );
      updateStoreState<Game[]>(updatedGames, "games");
      updateStoreState<Game>({ ...bingo, ...updatedBingo }, "bingo");
    });

    socket.on("selected_ball", (updatedBingo: Game) => {
      const updatedGames: Game[] = updateBingoMultiState(games, updatedBingo, [
        "players",
        "bingoCards",
      ]);
      updateStoreState<Game[]>(updatedGames, "games");
      updateStoreState<Game>({ ...bingo, ...updatedBingo }, "bingo");
    });

    socket.on("won_game", (updatedBingo: Game) => {
      const updatedGames: Game[] = updateBingoState(
        games,
        updatedBingo,
        "winner"
      );
      updateStoreState<Game[]>(updatedGames, "games");
      updateStoreState<Game>({ ...bingo, ...updatedBingo }, "bingo");
    });

    socket.on("reseted_bingo", (updatedBingo: Game) => {
      const updatedGames: Game[] = updateBingoFullState(games, updatedBingo);
      updateStoreState<Game[]>(updatedGames, "games");
      updateStoreState<Game>({ ...updatedBingo }, "bingo");
      updateStoreState<null>(null, "launchedBall");
    });

    return () => {
      offSocketEvents();
    };
  });
};

export default useSocket;
