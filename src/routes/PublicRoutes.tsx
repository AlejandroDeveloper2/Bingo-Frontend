import { Route, Routes } from "react-router-dom";

import { PublicLayout } from "@layout/index";

import { CreateAccountPage, LoginPage } from "@pages/index";

const PublicRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<LoginPage />} />
        <Route path="/createAccount" element={<CreateAccountPage />} />
      </Route>
    </Routes>
  );
};

export default PublicRoutes;
