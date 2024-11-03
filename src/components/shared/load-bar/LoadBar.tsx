import { Hourglass } from "iconoir-react";

import { LoadBarProps } from "@interfaces/component";

import { BarContainer, BarContent, Container } from "./LoadBar.style";

const LoadBar = ({ load }: LoadBarProps): JSX.Element => {
  return (
    <Container>
      <BarContainer>
        <BarContent load={load}></BarContent>
      </BarContainer>
      <span>
        <Hourglass />
        Cargando...
      </span>
    </Container>
  );
};

export default LoadBar;
