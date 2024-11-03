import { LogoProps } from "@interfaces/component";

import { BingoLogo } from "@assets/index";

import { LogoContainer } from "./Logo.style";

const Logo = ({ forNavigation }: LogoProps): JSX.Element => {
  return (
    <LogoContainer fornavigation={String(forNavigation)}>
      <img src={BingoLogo} alt="App Bingo Logo" loading="lazy" />
    </LogoContainer>
  );
};

export default Logo;
