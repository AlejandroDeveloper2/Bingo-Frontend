import styled from "styled-components";

const TitleContainer = styled.div`
  width: auto;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-xs);

  h1 {
    color: var(--black);
    font-size: var(--font-size-xl);
    text-align: center;
    font-weight: bold;
    text-transform: capitalize;
  }
  svg {
    width: 32px;
    height: 32px;
    color: var(--black);
  }

  @media (min-width: 768px) {
    h1 {
      font-size: var(--font-size-3xl);
    }
    svg {
      width: 36px;
      height: 36px;
    }
  }
  @media (min-width: 1400px) {
    h1 {
      font-size: var(--font-size-4xl);
    }
  }
`;

export { TitleContainer };
