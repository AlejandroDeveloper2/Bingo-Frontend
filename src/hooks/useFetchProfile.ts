/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import axios from "axios";

import { User } from "@interfaces/data";

import { useAuthStore, useLoading } from ".";

const useFetchProfile = (): User | null => {
  const { loggedUser, getUserProfile } = useAuthStore();
  const { toggleLoading } = useLoading();

  useEffect(() => {
    getUserProfile(toggleLoading);
    return () => {
      axios.CancelToken.source().cancel();
    };
  }, []);

  return loggedUser;
};

export default useFetchProfile;
