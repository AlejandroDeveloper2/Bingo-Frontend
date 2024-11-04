import { Game, KeyList } from "@interfaces/data";

export const updateBingoState = (
  games: Game[],
  updatedBingo: Game,
  updateKey: KeyList<Game>
) => {
  const updatedGames: Game[] = games.map((game) => {
    if (game._id == updatedBingo._id)
      return { ...game, [updateKey]: updatedBingo[updateKey] };
    return game;
  });

  return updatedGames;
};

export const updateBingoMultiState = (
  games: Game[],
  updatedBingo: Game,
  updateKeys: KeyList<Game>[]
) => {
  const updatedGames: Game[] = games.map((game) => {
    if (game._id == updatedBingo._id)
      return {
        ...game,
        [updateKeys[0]]: updatedBingo[updateKeys[0]],
        [updateKeys[1]]: updatedBingo[updateKeys[1]],
      };
    return game;
  });

  return updatedGames;
};

export const updateBingoFullState = (games: Game[], updatedBingo: Game) => {
  const updatedGames: Game[] = games.map((game) => {
    if (game._id == updatedBingo._id) return updatedBingo;
    return game;
  });

  return updatedGames;
};
