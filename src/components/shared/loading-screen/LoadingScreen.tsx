import { LoadingScreenProps } from "@interfaces/component";

import { Logo } from "@components/.";

import { LoadingScreenContainer } from "./LoadingScreen.style";

const LoadingScreen = ({
  opacity,
  isScreenLoading,
  children,
}: LoadingScreenProps): JSX.Element => {
  return (
    <LoadingScreenContainer
      opacity={opacity}
      isloading={String(isScreenLoading)}
    >
      <Logo forNavigation={false} />
      {children}
    </LoadingScreenContainer>
  );
};

export default LoadingScreen;
