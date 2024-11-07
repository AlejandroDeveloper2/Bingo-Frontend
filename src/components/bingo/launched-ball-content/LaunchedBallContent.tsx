import {
  BowlingBall,
  HistoricShield,
  QuestionMark,
  Search,
} from "iconoir-react";

import { useBingoStore, useModal } from "@hooks/.";

import BingoBall from "../bingo-ball/BingoBall";
import { BallsHistory, IconOnlyButton, Modal, Title } from "@components/.";

import {
  RandomBallContent,
  Section,
  UnknownBall,
} from "./LaunchedBallContent.style";

const LaunchedBallContent = (): JSX.Element => {
  const { launchedBall } = useBingoStore();

  const { isVisible, toggleVisible } = useModal();

  return (
    <>
      <Modal
        title="Balotas lanzadas"
        Icon={HistoricShield}
        isVisible={isVisible}
        toggleVisible={toggleVisible}
      >
        <BallsHistory />
      </Modal>
      <Section>
        <Title text={"Balota lanzada"} Icon={BowlingBall} />
        <RandomBallContent>
          <IconOnlyButton
            Icon={Search}
            title="Ver historial de balotas lanzadas"
            type="button"
            onClick={toggleVisible}
            variant="black"
          />
          {launchedBall ? (
            <BingoBall ballData={launchedBall} />
          ) : (
            <UnknownBall>
              <QuestionMark />
            </UnknownBall>
          )}
        </RandomBallContent>
      </Section>
    </>
  );
};

export default LaunchedBallContent;
