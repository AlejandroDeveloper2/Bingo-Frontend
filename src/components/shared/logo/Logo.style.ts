import styled from "styled-components";

interface LogoStyleProps {
  fornavigation: string;
}

const LogoContainer = styled.figure<LogoStyleProps>`
  width: auto;
  height: auto;
  display: block;
  img {
    width: ${({ fornavigation }: LogoStyleProps) =>
      fornavigation === "true" ? 50 : 100}px;
    height: ${({ fornavigation }: LogoStyleProps) =>
      fornavigation === "true" ? 50 : 100}px;
    object-fit: contain;
  }

  @media (min-width: 768px) {
    img {
      width: ${({ fornavigation }: LogoStyleProps) =>
        fornavigation === "true" ? 70 : 200}px;
      height: ${({ fornavigation }: LogoStyleProps) =>
        fornavigation === "true" ? 70 : 200}px;
    }
  }

  @media (min-width: 1400px) {
    img {
      width: ${({ fornavigation }: LogoStyleProps) =>
        fornavigation === "true" ? 100 : 250}px;
      height: ${({ fornavigation }: LogoStyleProps) =>
        fornavigation === "true" ? 100 : 250}px;
    }
  }
`;

export { LogoContainer };
