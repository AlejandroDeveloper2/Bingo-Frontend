import { Outlet } from "react-router-dom";

import { useLoadScreen, useSession } from "@hooks/index";

import { LoadBar, LoadingScreen, Logo } from "@components/index";

import { ContentContainer, Main } from "./PublicLayout.style";

const PublicLayout = (): JSX.Element => {
  useSession(0);
  const { isScreenLoading, load } = useLoadScreen();
  return (
    <Main>
      {isScreenLoading ? (
        <LoadingScreen
          opacity={!isScreenLoading ? 0 : 1}
          isScreenLoading={isScreenLoading}
        >
          <LoadBar load={load} />
        </LoadingScreen>
      ) : (
        <ContentContainer>
          <Logo forNavigation={false} />
          <Outlet />
        </ContentContainer>
      )}
    </Main>
  );
};

export default PublicLayout;
