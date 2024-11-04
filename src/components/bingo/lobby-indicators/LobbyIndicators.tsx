/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { Hourglass, Timer } from "iconoir-react";
import { useNavigate } from "react-router-dom";

import {
  useBingoStore,
  useStartingTimer,
  useWaitingPlayers,
} from "@hooks/index";

import { BadgeIndicator } from "@components/index";

import { Indicators } from "./LobbyIndicators.style";

const LobbyIndicators = (): JSX.Element => {
  const { bingo } = useBingoStore();
  const remaningPlayers: number = useWaitingPlayers();
  const timer = useStartingTimer();

  const navigate = useNavigate();

  useEffect(() => {
    if (timer === "0:00s") navigate("/home/bingo/" + bingo._id);
  }, [timer]);

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
          label="Esperando:"
          value={`${remaningPlayers} jugador(es)`}
          Icon={Timer}
        />
      </li>
    </Indicators>
  );
};

export default LobbyIndicators;
