import styled from "styled-components";

const TitleContainer = styled.div`
  width: auto;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-xs);

  h1 {
    color: var(--black);
    font-size: var(--font-size-lg);
    text-align: center;
    font-weight: bold;
    text-transform: capitalize;
  }
  svg {
    width: 24px;
    height: 24px;
    color: var(--black);
  }

  @media (min-width: 768px) {
    h1 {
      font-size: var(--font-size-xl);
    }
    svg {
      width: 32px;
      height: 32px;
    }
  }
  @media (min-width: 1400px) {
    h1 {
      font-size: var(--font-size-3xl);
    }
  }
`;

export { TitleContainer };
