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

const RandomBallContent = styled.ul`
  width: 100%;
  max-width: 520px;
  height: auto;
  background-color: var(--white);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: var(--spacing-xs);
  overflow-y: hidden;
  overflow-x: scroll;
  position: relative;
  padding: var(--spacing-md) var(--spacing-xl);
  border-radius: var(--radius-md);
  border: 1.5 solid var(--medium-gray);

  li {
    list-style: none;
  }
`;

export { Section, RandomBallContent };
