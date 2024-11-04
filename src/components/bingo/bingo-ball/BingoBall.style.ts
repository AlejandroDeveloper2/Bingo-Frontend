import styled from "styled-components";

interface BallContainerStyle {
  newball: string;
}

const BallContainer = styled.li<BallContainerStyle>`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: var(--radius-rounded);
  background-color: var(--black);
  border: ${({ newball }: BallContainerStyle) =>
    newball === "true" ? "solid 2px var(--orange)" : "none"};
  span {
    color: ${({ newball }: BallContainerStyle) =>
      newball === "true" ? "var(--orange)" : "var(--white)"};
    font-size: var(--font-size-lg);
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
  }

  @media (min-width: 768px) {
    width: 80px;
    height: 80px;
    span {
      font-size: var(--font-size-xl);
    }
  }

  @media (min-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;

export { BallContainer };
