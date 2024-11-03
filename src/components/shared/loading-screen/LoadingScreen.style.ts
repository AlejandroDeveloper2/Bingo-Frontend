import styled from "styled-components";

interface LoadingWindowStyle {
  opacity: number;
  isloading: string;
}

const LoadingScreenContainer = styled.div<LoadingWindowStyle>`
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  gap: var(--spacing-4xl);
  opacity: ${({ opacity }: LoadingWindowStyle) => opacity};
  transition: opacity 0.6s ease;
  z-index: ${({ isloading }: LoadingWindowStyle) =>
    isloading === "false" ? -200 : 200};
`;

export { LoadingScreenContainer };
