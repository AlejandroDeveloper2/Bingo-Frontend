import styled from "styled-components";

const PlayerSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    align-items: flex-start;
    gap: var(--spacing-md);
  }
`;

const List = styled.ul`
  width: 100%;
  height: auto;
  overflow-x: auto;
  gap: var(--spacing-sm);
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  padding: var(--spacing-xs) var(--spacing-sm);

  li {
    list-style: none;
    display: block;
  }
`;

export { PlayerSection, List };
