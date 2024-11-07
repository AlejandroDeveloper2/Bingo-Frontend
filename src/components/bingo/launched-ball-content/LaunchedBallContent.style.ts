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

const RandomBallContent = styled.div`
  width: 100%;
  max-width: 520px;
  height: auto;
  background-color: var(--white);
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-md) var(--spacing-xl);
  border-radius: var(--radius-md);
  border: 1.5 solid var(--medium-gray);

  button {
    width: 60px;
    height: 60px;
    padding: 0;
    position: absolute;
    right: 14px;
    top: 0;
    bottom: 0;
    margin: auto;
  }
`;

const UnknownBall = styled.div`
  flex-basis: 60px;
  flex-grow: 0;
  flex-shrink: 0;
  max-width: 100px;
  max-height: 100px;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: var(--radius-rounded);
  background-color: var(--white);
  border: solid 1.5px var(--black);
  svg {
    width: 32px;
    height: 32px;
    color: var(--black);
  }

  @media (min-width: 768px) {
    width: 80px;
    height: 80px;
    flex-basis: 80px;
  }

  @media (min-width: 768px) {
    width: 100px;
    height: 100px;
    flex-basis: 100px;
  }
`;

export { Section, RandomBallContent, UnknownBall };
