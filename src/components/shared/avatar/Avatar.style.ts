import styled from "styled-components";

interface CircleStyle {
  you?: string;
}

interface StatusStyle {
  connected: string;
}

const AvatarContainer = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-xs);

  p {
    width: 67px;
    overflow: hidden;
    color: var(--black);
    font-size: var(--font-size-sm);
    font-weight: normal;
    text-align: center;
    text-transform: capitalize;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

const AvatarCircle = styled.div<CircleStyle>`
  width: 70px;
  height: 70px;
  border-radius: var(--radius-rounded);
  display: flex;
  justify-content: center;
  background-color: var(--white);
  box-shadow: 0 0 5px var(--box-shadow-color);
  align-items: center;
  position: relative;
  border: ${({ you }: CircleStyle) =>
    you === "true" ? "3px solid var(--black)" : "none"};

  svg {
    width: 32px;
    height: 32px;
    color: var(--black);
  }

  @media (min-width: 768px) {
    width: 80px;
    height: 80px;

    svg {
      width: 36px;
      height: 36px;
    }
  }

  @media (min-width: 1400px) {
    width: 100px;
    height: 100px;

    svg {
      width: 42px;
      height: 42px;
    }
  }
`;

const ConnectionIndicator = styled.span<StatusStyle>`
  width: 16px;
  height: 16px;
  border-radius: var(--radius-rounded);
  background-color: ${({ connected }: StatusStyle) =>
    connected === "true" ? "var(--green)" : "var(--medium-gray)"};
  display: block;
  position: absolute;
  bottom: 3px;
  right: 3px;
  z-index: 10;

  @media (min-width: 1400px) {
    bottom: 5px;
    right: 5px;
  }
`;

export { AvatarContainer, AvatarCircle, ConnectionIndicator };
