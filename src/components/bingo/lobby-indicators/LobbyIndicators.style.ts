import styled from "styled-components";

const Indicators = styled.ul`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-xs);
  flex-direction: column;

  li {
    width: 100%;
    list-style: none;
    display: block;
  }

  @media (min-width: 768px) {
    align-items: flex-start;
    gap: var(--spacing-sm);
  }
`;

export { Indicators };
