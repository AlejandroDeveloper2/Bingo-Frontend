import { Hourglass, User } from "iconoir-react";

import { useBingoStore, useStartingTimer } from "@hooks/index";

import { BadgeIndicator } from "@components/index";

import { Indicators } from "./LobbyIndicators.style";

const LobbyIndicators = (): JSX.Element => {
  const { bingo } = useBingoStore();
  const timer = useStartingTimer();

  return (
    <Indicators>
      <li>
        <BadgeIndicator
          label="Juego empieza en:"
          value={timer}
          Icon={Hourglass}
        />
      </li>
      <li>
        <BadgeIndicator
          label="Jugadores con cartón generado:"
          value={`${bingo.bingoCards.length} jugador(es)`}
          Icon={User}
        />
      </li>
    </Indicators>
  );
};

export default LobbyIndicators;
