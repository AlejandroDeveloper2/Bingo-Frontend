import { Gamepad, User } from "iconoir-react";

import { useAuthStore } from "@hooks/index";

import { GameCardListProps } from "@interfaces/component";

import { BadgeIndicator, GameCard, Title } from "@components/index";

import { ListContainer, Ul } from "./GameCardList.style";

const GameCardList = ({ children }: GameCardListProps): JSX.Element => {
  const { loggedUser } = useAuthStore();

  return (
    <ListContainer>
      <BadgeIndicator
        label="Bienvenido:"
        value={loggedUser ? loggedUser.name : "?"}
        Icon={User}
      />
      <Title text="Sorteos de bingo" Icon={Gamepad} />
      <Ul>{children}</Ul>
    </ListContainer>
  );
};

GameCardList.Card = GameCard;

export default GameCardList;
