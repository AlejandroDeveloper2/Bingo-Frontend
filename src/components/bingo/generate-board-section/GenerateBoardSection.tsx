import { KanbanBoard, QuestionMark, Settings } from "iconoir-react";

import { useAuthStore, useBingoStore, useLoading } from "@hooks/.";

import { BingoBoard, Button, Title } from "@components/.";

import { EmptyBoard, Section } from "./GenerateBardSection.style";

const GenerateBoardSection = (): JSX.Element => {
  const { bingo, bingoBoard, generateBingoCard } = useBingoStore();
  const { loggedUser } = useAuthStore();
  const { loading, toggleLoading } = useLoading();

  return (
    <Section>
      <Title text="Cartón de bingo" Icon={KanbanBoard} />
      {bingoBoard._id === "" ? (
        <EmptyBoard>
          <QuestionMark />
          <p>Genera un cartón</p>
        </EmptyBoard>
      ) : (
        <BingoBoard boardData={bingoBoard} />
      )}
      <Button
        label="Generar cartón"
        Icon={Settings}
        title="Genera tu cartón de bingo!"
        type="button"
        onClick={() => {
          if (loggedUser)
            generateBingoCard(
              bingo._id,
              loggedUser._id,
              bingo.gameMode,
              toggleLoading
            );
        }}
        disabled={bingoBoard._id !== ""}
        loading={loading}
        variant="white"
        border
      />
    </Section>
  );
};

export default GenerateBoardSection;
