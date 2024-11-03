import { TitleProps } from "@interfaces/component";

import { TitleContainer } from "./Title.style";

const Title = ({ text, Icon }: TitleProps): JSX.Element => {
  return (
    <TitleContainer>
      <Icon />
      <h1>{text}</h1>
    </TitleContainer>
  );
};

export default Title;
