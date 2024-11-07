import { useBingoStore } from "@hooks/.";

import BingoBall from "../bingo-ball/BingoBall";

import { BallList } from "./BallHistory.style";

const BallsHistory = (): JSX.Element => {
  const { bingo } = useBingoStore();

  return (
    <BallList>
      {bingo.launchedBallsHistory.map((ball) => (
        <li key={ball._id}>
          <BingoBall ballData={ball} />
        </li>
      ))}
    </BallList>
  );
};

export default BallsHistory;
