import { BingoBallProps } from "@interfaces/component";
import { BallContainer } from "./BingoBall.style";

const BingoBall = ({
  ballData,
  index,
  randomBallSize,
}: BingoBallProps): JSX.Element => {
  return (
    <BallContainer newball={String(index === randomBallSize - 1)}>
      <span>{ballData.name + ballData.number}</span>
    </BallContainer>
  );
};

export default BingoBall;
