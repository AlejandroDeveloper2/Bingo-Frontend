import styled from "styled-components";

const Badge = styled.div`
  background-color: var(--light-gray);
  width: auto;
  height: auto;
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-rounded);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-sm);

  label {
    color: var(--black);
    text-align: center;
    font-size: var(--font-size-sm);
    font-weight: bold;
    text-transform: capitalize;
  }

  div {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: var(--spacing-xs);

    span {
      color: var(--black);
      text-align: center;
      font-size: var(--font-size-sm);
      font-weight: normal;
      text-transform: capitalize;
    }

    svg {
      width: 24px;
      height: 24px;
      color: var(--black);
    }
  }

  @media (min-width: 768px) {
    padding: var(--spacing-md) var(--spacing-xl);
    label {
      font-size: var(--font-size-md);
    }
    div {
      span {
        font-size: var(--font-size-md);
      }
      svg {
        width: 32px;
        height: 32px;
      }
    }
  }

  @media (min-width: 1400px) {
    label {
      font-size: var(--font-size-lg);
    }
    div {
      span {
        font-size: var(--font-size-lg);
      }
      svg {
        width: 36px;
        height: 36px;
      }
    }
  }
`;

export { Badge };
