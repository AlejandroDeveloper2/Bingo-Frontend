import { GameModeType, GameStatusType } from "@interfaces/data";

export const getGameStatusName = (status: GameStatusType) => {
  const parsedStatus: string =
    status === "unstart"
      ? "Sin Comenzar"
      : status === "waiting"
      ? "Esperando"
      : status === "ended"
      ? "Terminado"
      : "En progreso";
  return parsedStatus;
};

export const getGameModeName = (gameMode: GameModeType) => {
  const parsedMode: string =
    gameMode === "full"
      ? "Bingo Pleno"
      : gameMode === "horizontal"
      ? "Linea Horizontal"
      : gameMode === "corners"
      ? "Esquinas"
      : gameMode === "diagonal"
      ? "Diagonal"
      : "Linea Vertical";
  return parsedMode;
};
