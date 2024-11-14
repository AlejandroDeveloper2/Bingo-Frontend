/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import axios from "axios";

import { useAuthStore, useLoading } from ".";

const useFetchProfile = (): void => {
  const { getUserProfile } = useAuthStore();
  const { toggleLoading } = useLoading();

  useEffect(() => {
    getUserProfile(toggleLoading);
    return () => {
      axios.CancelToken.source().cancel();
    };
  }, []);
};

export default useFetchProfile;
