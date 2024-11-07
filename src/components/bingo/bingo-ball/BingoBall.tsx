import { BingoBallProps } from "@interfaces/component";
import { BallContainer } from "./BingoBall.style";

const BingoBall = ({ ballData }: BingoBallProps): JSX.Element => {
  return (
    <BallContainer newball={String(true)}>
      <span>{ballData.name + ballData.number}</span>
    </BallContainer>
  );
};

export default BingoBall;
