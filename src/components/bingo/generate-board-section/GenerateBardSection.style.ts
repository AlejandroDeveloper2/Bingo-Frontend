import styled from "styled-components";

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

const EmptyBoard = styled.div`
  width: 100%;
  height: auto;
  padding: var(--spacing-xl) var(--spacing-sm);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-sm);
  border: solid 1.5px var(--medium-gray);
  border-radius: var(--radius-md);
  background-color: transparent;

  svg {
    width: 48px;
    height: 48px;
    color: var(--black);
  }
  p {
    color: var(--black);
    font-size: var(--font-size-xl);
    text-align: center;
    font-weight: 300;
  }

  @media (min-width: 768px) {
    padding: var(--spacing-xl) var(--spacing-md);
    p {
      font-size: var(--font-size-2xl);
    }
  }

  @media (min-width: 1400px) {
    p {
      font-size: var(--font-size-3xl);
    }
  }
`;

export { Section, EmptyBoard };
