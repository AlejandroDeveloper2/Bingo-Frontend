import { useLocation, useParams } from "react-router-dom";

import { BingoBoardProps } from "@interfaces/component";
import { BingoBall } from "@interfaces/data";

import { useBingoStore, useLoading } from "@hooks/.";

import {
  BoardContainer,
  Cell,
  HeadCell,
  HeadRow,
  Column,
  Table,
} from "./BingoBoard.style";
import { Spinner } from "@components/index";

const BingoBoard = ({ boardData }: BingoBoardProps): JSX.Element => {
  const { gameId } = useParams();
  const location = useLocation();
  const { player, bingoBoard, selectBingoBall } = useBingoStore();

  const { loading, toggleLoading } = useLoading();

  const B = boardData.balls.filter((ball) => ball.name === "B");
  const I = boardData.balls.filter((ball) => ball.name === "I");
  const N = boardData.balls.filter((ball) => ball.name === "N");
  const G = boardData.balls.filter((ball) => ball.name === "G");
  const O = boardData.balls.filter((ball) => ball.name === "O");

  const NBlank: BingoBall[] = [
    ...N,
    {
      _id: "blank",
      name: "N",
      number: 0,
      enabled: false,
      selected: false,
    },
  ];

  const headers: string[] = ["B", "I", "N", "G", "O"];
  const boardMatrix: BingoBall[][] = [B, I, NBlank, G, O];

  return (
    <BoardContainer>
      <HeadRow>
        {headers.map((head, i) => (
          <HeadCell key={i}>
            <span>{head}</span>
          </HeadCell>
        ))}
      </HeadRow>
      <Table>
        {boardMatrix.map((row, i) => (
          <Column key={i}>
            {row.map((ball) => (
              <Cell
                key={ball._id}
                blank={ball._id === "blank" ? ball._id : undefined}
                enabled={String(ball.enabled)}
                selected={String(ball.selected)}
                onClick={() => {
                  if (
                    gameId &&
                    ball._id !== "blank" &&
                    ball.enabled &&
                    location.pathname === "/home/bingo/" + gameId
                  )
                    selectBingoBall(
                      gameId,
                      ball._id,
                      {
                        playerEmail: player.email,
                        selectedBall: {
                          ...ball,
                          selected: true,
                          enabled: false,
                        },
                        cardCode: bingoBoard.code,
                      },
                      toggleLoading
                    );
                }}
              >
                {loading.isLoading ? (
                  <Spinner color="black" direction={"row"} />
                ) : (
                  <span>{ball.name + ball.number}</span>
                )}
              </Cell>
            ))}
          </Column>
        ))}
      </Table>
    </BoardContainer>
  );
};

export default BingoBoard;
