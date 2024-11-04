import styled from "styled-components";

interface MessageBoxStyle {
  error: string;
}

const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
  justify-content: center;
  align-items: center;
  overflow: hidden;

  @media (min-width: 768px) {
    gap: var(--spacing-md);
    align-items: flex-start;
  }
`;

const MessageBox = styled.div<MessageBoxStyle>`
  width: 100%;
  max-width: 520px;
  max-height: 100px;
  border-radius: var(--radius-md);
  background-color: ${({ error }: MessageBoxStyle) =>
    error === "true" ? "var(--red)" : "var(--green)"};
  display: block;
  max-height: 120px;
  overflow-y: auto;
  overflow-x: hidden;
  padding: var(--spacing-sm) var(--spacing-md);
  p {
    color: var(--white);
    font-size: var(--font-size-md);
    font-weight: 400;
    text-align: left;
    vertical-align: middle;
  }
`;

export { Section, MessageBox };
