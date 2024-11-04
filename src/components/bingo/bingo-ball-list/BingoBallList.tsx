import { BowlingBall } from "iconoir-react";

import { useBingoStore } from "@hooks/.";

import BingoBall from "../bingo-ball/BingoBall";
import Title from "@components/shared/title/Title";

import { RandomBallContent, Section } from "./BingoBallList.style";

const BingoBallList = (): JSX.Element => {
  const { randomBalls } = useBingoStore();

  return (
    <Section>
      <Title text={"Balotas lanzadas"} Icon={BowlingBall} />
      <RandomBallContent>
        {randomBalls.map((randomBall, i) => (
          <BingoBall
            key={randomBall._id}
            index={i}
            ballData={randomBall}
            randomBallSize={randomBalls.length}
          />
        ))}
      </RandomBallContent>
    </Section>
  );
};

export default BingoBallList;
