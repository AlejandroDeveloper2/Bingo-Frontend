import { Outlet, useLocation } from "react-router-dom";
import { Clock, Gamepad, Home } from "iconoir-react";

import { useFetchProfile, useSession } from "@hooks/index";

import { Navigation } from "@components/index";

import { Content, Main } from "./PrivateLayout.style";

const PrivateLayout = (): JSX.Element => {
  useSession(1000);
  const location = useLocation();
  useFetchProfile();

  return (
    <Main>
      <Navigation
        pageTitle={
          location.pathname === "/home"
            ? "Inicio"
            : location.pathname === "/home/lobby"
            ? "Lobby"
            : "Bingo"
        }
        PageIcon={
          location.pathname === "/home"
            ? Home
            : location.pathname === "/home/lobby"
            ? Clock
            : Gamepad
        }
      />

      <Content>
        <Outlet />
      </Content>
    </Main>
  );
};

export default PrivateLayout;
