/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

import { BingoBall, Game, UpdatedGameRandomBalls } from "@interfaces/data";

import useBingoStore from "./useBingoStore";

const useBallTimer = () => {
  const token: string = window.localStorage.getItem("token") ?? "";

  const [secondsLeft, setSecondsLeft] = useState<number | null>(null);
  const { socket, bingo, updateStoreState } = useBingoStore();

  const condition: boolean =
    bingo.winner === null &&
    bingo.gameStatus === "in-progress" &&
    bingo.players.length >= 1;

  useEffect(() => {
    if (condition) {
      socket.emit("enter_game_room", {
        gameId: bingo._id,
        token,
        players: bingo.players.length,
      });
    }
  }, [condition]);

  useEffect(() => {
    socket.on("timer_update", (time: number) => {
      setSecondsLeft(time);
    });

    socket.on("launched_ball", (randomBall: BingoBall) => {
      updateStoreState<BingoBall>(randomBall, "launchedBall");
    });

    socket.on(
      "updated_history",
      ({ launchedBallsHistory }: UpdatedGameRandomBalls) => {
        updateStoreState<Game>({ ...bingo, launchedBallsHistory }, "bingo");
      }
    );

    socket.on("message", (message: string) => {
      updateStoreState<{ message: string; error: boolean }>(
        { message, error: false },
        "bingoMessageLog"
      );
    });

    return () => {
      socket.off("timer_update");
      socket.off("launched_ball");
      socket.off("message");
      socket.off("updated_history");
    };
  });

  return `0:0${!secondsLeft ? 0 : secondsLeft}s`;
};

export default useBallTimer;
