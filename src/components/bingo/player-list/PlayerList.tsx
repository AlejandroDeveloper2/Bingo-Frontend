import { User } from "iconoir-react";

import { useAuthStore, useBingoStore } from "@hooks/.";

import { Avatar, Title } from "@components/index";

import { List, PlayerSection } from "./PlayerList.style";

const PlayerList = (): JSX.Element => {
  const { bingo } = useBingoStore();
  const { loggedUser } = useAuthStore();

  return (
    <PlayerSection>
      <Title
        text={`Jugadores conectados (${bingo.players.length})`}
        Icon={User}
      />
      <List>
        {bingo.players.map((player) => (
          <li key={player._id}>
            <Avatar
              userName={player.name}
              connectionStatus={true}
              you={player.email === loggedUser?.email}
            />
          </li>
        ))}
      </List>
    </PlayerSection>
  );
};

export default PlayerList;
