import { BingoBall, BingoBallNameType, BingoCard } from "@interfaces/data";

export const drawBingoBoard = (boardData: BingoCard) => {
  const headers: BingoBallNameType[] = ["B", "I", "N", "G", "O"];
  const blankSpaceCell: BingoBall = {
    _id: "blank",
    name: "N",
    number: 0,
    enabled: false,
    selected: false,
  };

  const boardMatrix: BingoBall[][] = headers.map((header) => {
    return boardData.balls.filter((ball) => ball.name === header);
  });

  boardMatrix.forEach((column, i) => {
    if (i === 2) {
      column.splice(2, 0, blankSpaceCell);
    }
  });

  return {
    headers,
    boardMatrix,
  };
};

export default drawBingoBoard;
