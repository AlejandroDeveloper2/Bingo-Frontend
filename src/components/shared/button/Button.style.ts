import styled from "styled-components";

import { ButtonVariantType } from "@interfaces/component";

interface ButtonStyle {
  variant: ButtonVariantType;
  border?: string;
}

const Button = styled.button<ButtonStyle>`
  width: 100%;
  height: auto;
  padding: var(--spacing-sm) var(--spacing-md);
  background-color: ${({ variant }: ButtonStyle) => `var(--${variant})`};
  border: ${({ border }: ButtonStyle) =>
    border ? "solid 1.5px var(--black)" : "none"};
  border-radius: var(--radius-rounded);
  display: inline-flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-sm);
  transition: opacity 0.6s ease;

  span {
    font-size: var(--font-size-lg);
    color: ${({ variant }: ButtonStyle) =>
      variant === "black" ? "var(--white)" : "var(--black)"};
    font-weight: bold;
    text-align: center;
    text-transform: capitalize;
  }

  svg {
    width: 24px;
    height: 24px;
    color: ${({ variant }: ButtonStyle) =>
      variant === "black" ? "var(--white)" : "var(--black)"};
  }

  &:hover {
    opacity: 0.7;
  }

  @media (min-width: 768px) {
    padding: var(--spacing-xl) var(--spacing-md);
  }
`;

export { Button };
