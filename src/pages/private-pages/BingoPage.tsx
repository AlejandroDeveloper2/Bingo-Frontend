import { Hourglass, KanbanBoard, Star } from "iconoir-react";
import { useNavigate } from "react-router-dom";

import {
  useLoading,
  useBingoStore,
  useAuthStore,
  useFetchBingoData,
  usePlayBingo,
  useBallTimer,
  useSocket,
} from "@hooks/.";

import {
  BadgeIndicator,
  LaunchedBallContent,
  BingoBoard,
  BingoMessages,
  Button,
  PlayerList,
  Title,
} from "@components/index";

import { Grid, Column } from "@styles/index.style";

const BingoPage = (): JSX.Element => {
  useSocket();
  const navigate = useNavigate();
  const { gameId } = useFetchBingoData();
  const { bingo, bingoBoard, player, singBingo } = useBingoStore();
  const { loggedUser } = useAuthStore();

  const { loading, toggleLoading } = useLoading();

  const countDown = useBallTimer();
  usePlayBingo();

  return (
    <>
      <Grid>
        <Column>
          <Title text="Mi cartón de bingo" Icon={KanbanBoard} />
          <BingoBoard boardData={bingoBoard} />
          <Button
            label="¡Bingo!"
            Icon={Star}
            title="Cantar Bingo!"
            type="button"
            onClick={() => {
              if (gameId && loggedUser)
                singBingo(
                  gameId,
                  {
                    userId: loggedUser._id,
                    correctBallSelections: player.correctBallSelections,
                    gameMode: bingo.gameMode,
                  },
                  navigate,
                  toggleLoading
                );
            }}
            variant="black"
            loading={loading}
            disabled={loading.isLoading || bingo.winner !== null}
          />
        </Column>
        <Column>
          <BadgeIndicator
            label="Próxima balota en: "
            value={countDown}
            Icon={Hourglass}
          />
          <LaunchedBallContent />
          <BingoMessages />
          <PlayerList />
        </Column>
      </Grid>
    </>
  );
};

export default BingoPage;
