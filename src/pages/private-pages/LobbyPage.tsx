import { ArrowLeft } from "iconoir-react";
import { useNavigate } from "react-router-dom";

import { useBingoStore, useFetchBingoData, useSocket } from "@hooks/.";

import {
  GenerateBoardSection,
  LobbyIndicators,
  PlayerList,
  Button,
} from "@components/index";

import { Column, Grid } from "@styles/index.style";

const LobbyPage = (): JSX.Element => {
  useSocket();
  const navigate = useNavigate();
  const { gameId } = useFetchBingoData();
  const { player, bingoBoard, deletePlayerFromBingo } = useBingoStore();

  return (
    <>
      <Grid>
        <Column>
          <GenerateBoardSection />
          <LobbyIndicators />
        </Column>
        <Column>
          <PlayerList />
          <Button
            label="Regresar al inicio"
            Icon={ArrowLeft}
            type="button"
            title="Salir del lobby"
            onClick={() => {
              if (gameId)
                deletePlayerFromBingo(gameId, player._id, bingoBoard.code).then(
                  () => navigate("/home")
                );
            }}
            variant="black"
          />
        </Column>
      </Grid>
    </>
  );
};

export default LobbyPage;
