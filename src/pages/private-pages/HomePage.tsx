/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { User } from "iconoir-react";

import { Game } from "@interfaces/data";

import { useAuthStore, useLoading } from "@hooks/index";

import { BadgeIndicator, GameCardList } from "@components/index";

const HomePage = (): JSX.Element => {
  const { toggleLoading } = useLoading();
  const { loggedUser, getUserProfile } = useAuthStore();

  useEffect(() => {
    getUserProfile(toggleLoading);
  }, []);

  const game: Game = {
    _id: "111",
    players: [],
    bingoCards: [],
    randomBingoBalls: [],
    gameMode: "full",
    gameStatus: "unstart",
    winner: null,
  };

  return (
    <>
      <BadgeIndicator
        label="Bienvenido:"
        value={loggedUser ? loggedUser.name : "?"}
        Icon={User}
      />
      <GameCardList>
        <GameCardList.Card game={game} />
      </GameCardList>
    </>
  );
};

export default HomePage;
