import styled from "styled-components";

interface BarContentProps {
  load: number;
}

const Container = styled.section`
  width: fit-content;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-sm);
  flex-direction: column;

  span {
    display: inline-flex;
    gap: var(--spacing-xs);
    justify-content: center;
    align-items: center;
    color: var(--black);
    font-size: var(--font-size-md);
    font-weight: bold;
    text-align: center;
    text-transform: capitalize;

    svg {
      width: 24px;
      height: 24px;
      color: var(--black);
      animation-name: rotate-icon;
      animation-duration: 1.5s;
      animation-timing-function: ease;
      animation-iteration-count: infinite;
      animation-direction: alternate;
    }
  }

  @media (min-width: 768px) {
    span {
      font-size: var(--font-size-lg);
    }
  }

  @media (min-width: 1400px) {
    span {
      font-size: var(--font-size-xl);
      svg {
        width: 32px;
        height: 32px;
      }
    }
  }

  @keyframes rotate-icon {
    0% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(-180deg);
    }
  }
`;

const BarContainer = styled.div`
  width: 200px;
  height: auto;
  padding: var(--spacing-xs) var(--spacing-sm);
  background-color: var(--white);
  box-shadow: 0 0 5px 2px var(--box-shadow-color);
  border-radius: var(--radius-rounded);
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;

  @media (min-width: 768px) {
    width: 350px;
  }
  @media (min-width: 1400px) {
    width: 450px;
  }
`;

const BarContent = styled.div<BarContentProps>`
  width: ${({ load }: BarContentProps) => load}%;
  height: 30px;
  border-radius: var(--radius-rounded);
  background-color: var(--black);
  transition: ease width 0.6s;
  display: inline-block;

  @media (min-width: 768px) {
    height: 40px;
  }
  @media (min-width: 1400px) {
    height: 50px;
  }
`;

export { Container, BarContainer, BarContent };
