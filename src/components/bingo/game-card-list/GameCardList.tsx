import { Gamepad } from "iconoir-react";

import { GameCardListProps } from "@interfaces/component";

import { GameCard, Title } from "@components/index";

import { ListContainer, Ul } from "./GameCardList.style";

const GameCardList = ({ children }: GameCardListProps): JSX.Element => {
  return (
    <ListContainer>
      <Title text="Sorteos de bingo" Icon={Gamepad} />
      <Ul>{children}</Ul>
    </ListContainer>
  );
};

GameCardList.Card = GameCard;

export default GameCardList;
