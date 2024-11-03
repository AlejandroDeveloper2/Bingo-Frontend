import { LogOut } from "iconoir-react";

import { NavigationProps } from "@interfaces/component";

import { useAuthStore } from "@hooks/index";

import { IconOnlyButton, Logo } from "@components/.";

import { Nav } from "./Navigation.style";

const Navigation = ({ pageTitle, PageIcon }: NavigationProps): JSX.Element => {
  const { logout } = useAuthStore();

  return (
    <Nav>
      <Logo forNavigation={true} />
      <span>
        <PageIcon />
        {pageTitle}
      </span>
      <IconOnlyButton
        border
        Icon={LogOut}
        type="button"
        title="Cerrar sesión"
        onClick={logout}
        variant="white"
      />
    </Nav>
  );
};

export default Navigation;
