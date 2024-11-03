import { Route, Routes } from "react-router-dom";

import { PrivateLayout } from "@layout/index";

const PrivateRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/home" element={<PrivateLayout />}>
        <Route index element={<>Home</>} />
        <Route path="/home/lobby" element={<>Lobby</>} />
        <Route path="/home/bingo" element={<>bingo</>} />
      </Route>
    </Routes>
  );
};

export default PrivateRoutes;
