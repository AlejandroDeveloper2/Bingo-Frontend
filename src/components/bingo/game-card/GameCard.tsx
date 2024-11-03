import { Play, SwitchOn, Triangle, User } from "iconoir-react";

import { FeatureProps, GameCardProps } from "@interfaces/component";

import { getGameStatusName, getGameModeName } from "@helpers/index";

import { Button } from "@components/.";
import { BingoBoardImage } from "@assets/index";

import { Card, FeatureContent, Features } from "./GameCard.style";

const Feature = ({ label, Icon, value }: FeatureProps): JSX.Element => {
  return (
    <FeatureContent>
      <Icon />
      <p>
        {label}: <span> {value}</span>
      </p>
    </FeatureContent>
  );
};

const GameCard = ({ game }: GameCardProps): JSX.Element => {
  return (
    <Card>
      <img src={BingoBoardImage} alt="Bingo Board" loading="lazy" />
      <h2>Bingo 75</h2>
      <Features>
        <Feature
          Icon={Triangle}
          label="Modo de juego"
          value={getGameModeName(game.gameMode)}
        />
        <Feature
          Icon={SwitchOn}
          label="Estado"
          value={getGameStatusName(game.gameStatus)}
        />
        <Feature
          Icon={User}
          label="Jugadores conectados"
          value={game.players.length}
        />
      </Features>
      <Button
        label="Jugar"
        Icon={Play}
        title="Entrar al bingo!"
        type="button"
        onClick={() => {}}
        variant="white"
      />
    </Card>
  );
};

export default GameCard;