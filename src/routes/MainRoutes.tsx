import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { PrivateRoutes, PublicRoutes } from "@routes/.";

import { useAuthStore } from "@hooks/index";

import { LoadingScreen, Spinner } from "@components/index";

const MainRoutes = (): JSX.Element => {
  const { authenticated, checking } = useAuthStore();

  if (checking)
    return (
      <LoadingScreen opacity={1} isScreenLoading={true}>
        <Spinner color="black" message="Cargando..." direction="column" />
      </LoadingScreen>
    );

  return (
    <BrowserRouter>
      <Routes>
        {authenticated ? (
          <>
            <Route path="/*" element={<PrivateRoutes />} />
            <Route path="/" element={<Navigate to={`/home`} />} />
            <Route path="/createAccount/*" element={<Navigate to="/home" />} />
          </>
        ) : (
          <>
            <Route path="/*" element={<PublicRoutes />} />
            <Route path="/home/*" element={<Navigate to="/" />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;
