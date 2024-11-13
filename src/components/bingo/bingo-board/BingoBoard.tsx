import { useLocation } from "react-router-dom";

import { BingoBoardProps } from "@interfaces/component";

import { useBingoStore, useLoading } from "@hooks/.";
import { drawBingoBoard } from "@utils/index";

import { Spinner } from "@components/index";

import {
  BoardContainer,
  Cell,
  HeadCell,
  HeadRow,
  Column,
  Table,
} from "./BingoBoard.style";
import { useState } from "react";
import { BingoBall } from "@interfaces/data";

const BingoBoard = ({ boardData }: BingoBoardProps): JSX.Element => {
  const [selectedBall, setSelectedBall] = useState<BingoBall | null>(null);

  const location = useLocation();

  const { gameId } = location.state || {};

  const { player, bingoBoard, selectBingoBall } = useBingoStore();
  const { loading, toggleLoading } = useLoading();

  const { headers, boardMatrix } = drawBingoBoard(boardData);

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
                    location.pathname === "/home/bingo"
                  ) {
                    setSelectedBall(ball);
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
                  }
                }}
              >
                {loading.isLoading && selectedBall?._id === ball._id ? (
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
