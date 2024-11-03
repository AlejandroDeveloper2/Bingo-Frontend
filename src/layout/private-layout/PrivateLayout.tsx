import { Outlet } from "react-router-dom";

import { useAuthStore, useLoading, useSession } from "@hooks/index";
import { useEffect } from "react";

const PrivateLayout = (): JSX.Element => {
  useSession(1000);
  const { toggleLoading } = useLoading();
  const { loggedUser, getUserProfile } = useAuthStore();

  useEffect(() => {
    getUserProfile(toggleLoading);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <p>{loggedUser?.name}</p>
      <Outlet />
    </div>
  );
};

export default PrivateLayout;
