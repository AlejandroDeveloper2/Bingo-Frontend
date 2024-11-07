import styled from "styled-components";

import { SpinnerDirectionType } from "@interfaces/component";

const SpinnerContainer = styled.div<{
  direction: SpinnerDirectionType;
  color: "white" | "black";
}>`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: ${({ direction }: { direction: SpinnerDirectionType }) =>
    direction};
  justify-content: center;
  align-items: center;
  gap: var(--spacing-sm);

  p {
    font-weight: normal;
    font-family: var(--font-family);
    font-size: var(--font-size-sm);
    color: ${({ color }: { color: string }) => color};
    text-align: center;
    white-space: pre-wrap;
  }

  @media (min-width: 768px) {
    p {
      font-size: var(--font-size-md);
    }
  }
`;

const SpinnerBody = styled.div<{ color: string }>`
  display: inline-block;
  position: relative;
  width: 50px;
  height: 50px;
  box-sizing: border-box;

  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 38px;
    height: 38px;
    margin: 8px;
    border: 5px solid ${({ color }: { color: string }) => color};
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${({ color }: { color: string }) => color} transparent
      transparent transparent;
  }

  div:nth-child(1) {
    animation-delay: -0.45s;
  }
  div:nth-child(2) {
    animation-delay: -0.3s;
  }
  div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export { SpinnerContainer, SpinnerBody };
