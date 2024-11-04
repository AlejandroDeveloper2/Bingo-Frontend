import { Hourglass, KanbanBoard, Star } from "iconoir-react";

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
  BingoBallList,
  BingoBoard,
  BingoMessages,
  Button,
  PlayerList,
  Title,
} from "@components/index";

import { Grid, Column } from "@styles/index.style";

const BingoPage = (): JSX.Element => {
  useSocket();

  const { gameId } = useFetchBingoData();
  const { bingo, bingoBoard, player, singBingo } = useBingoStore();
  const { loggedUser } = useAuthStore();

  const { loading, toggleLoading } = useLoading();

  const time = useBallTimer();
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
                  toggleLoading
                );
            }}
            variant="black"
            loading={loading}
            disabled={loading.isLoading}
          />
        </Column>
        <Column>
          <BadgeIndicator
            label="Próxima balota en: "
            value={time}
            Icon={Hourglass}
          />
          <BingoBallList />
          <BingoMessages />
          <PlayerList />
        </Column>
      </Grid>
    </>
  );
};

export default BingoPage;
