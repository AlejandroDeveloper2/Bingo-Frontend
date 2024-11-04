import { useEffect } from "react";
import io, { Socket } from "socket.io-client";

import { BingoBall, Game } from "@interfaces/data";

import useBingoStore from "./useBingoStore";
import {
  updateBingoFullState,
  updateBingoMultiState,
  updateBingoState,
} from "@helpers/index";

const socket: Socket = io("/");

const useSocket = (): void => {
  const { games, bingo, updateStoreState } = useBingoStore();

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
      console.log(updatedGames);
      updateStoreState<Game[]>(updatedGames, "games");
      updateStoreState<Game>({ ...bingo, ...updatedBingo }, "bingo");
    });

    socket.on("launched_random_ball", (updatedBingo: Game) => {
      const updatedGames: Game[] = updateBingoState(
        games,
        updatedBingo,
        "randomBingoBalls"
      );
      updateStoreState<Game[]>(updatedGames, "games");
      // updateStoreState<Game>({ ...bingo, ...updatedBingo }, "bingo");
      updateStoreState<BingoBall[]>(
        updatedBingo.randomBingoBalls,
        "randomBalls"
      );
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
    });

    return () => {
      socket.off();
    };
  });
};

export default useSocket;
