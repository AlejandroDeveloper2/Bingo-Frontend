import { Route, Routes } from "react-router-dom";

import { PrivateLayout } from "@layout/index";

import { BingoPage, HomePage, LobbyPage } from "@pages/index";

const PrivateRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/home" element={<PrivateLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/home/lobby/:gameId" element={<LobbyPage />} />
        <Route path="/home/bingo/:gameId" element={<BingoPage />} />
      </Route>
    </Routes>
  );
};

export default PrivateRoutes;
