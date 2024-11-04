import { Message } from "iconoir-react";

import { useBingoStore } from "@hooks/.";

import { Title } from "@components/index";

import { Section, MessageBox } from "./BingoMessages.style";

const BingoMessages = (): JSX.Element => {
  const { bingoMessageLog } = useBingoStore();

  return (
    <Section>
      <Title text="Mensajes" Icon={Message} />
      <MessageBox error={String(bingoMessageLog.error)}>
        <p>{bingoMessageLog.message}</p>
      </MessageBox>
    </Section>
  );
};

export default BingoMessages;
