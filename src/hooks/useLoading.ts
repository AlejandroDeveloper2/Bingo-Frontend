import { useState } from "react";

import { Loading } from "@interfaces/data";

const useLoading = () => {
  const [loading, setLoading] = useState<Loading>({
    isLoading: false,
    message: "",
  });

  const toggleLoading = (loadingStatus: Loading): void => {
    setLoading(loadingStatus);
  };

  return {
    loading,
    toggleLoading,
  };
};

export default useLoading;
