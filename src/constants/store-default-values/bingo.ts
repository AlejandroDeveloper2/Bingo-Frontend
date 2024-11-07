import { BingoCard, Game, Player } from "@interfaces/data";

export const bingoDefaultValues: Game = {
  _id: "",
  players: [],
  bingoCards: [],
  gameMode: "corners",
  gameStatus: "unstart",
  winner: null,
  launchedBallsHistory: [],
};

export const playerDefaultValues: Player = {
  _id: "",
  email: "",
  name: "",
  correctBallSelections: 0,
};

export const defaultBingoBoard: BingoCard = {
  _id: "",
  balls: [],
  user: {
    _id: "",
    name: "",
    email: "",
    sessionStatus: "online",
  },
  code: "",
};
