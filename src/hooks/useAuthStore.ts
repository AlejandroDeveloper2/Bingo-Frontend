import { useStore } from "zustand";

import { AuthStore } from "@interfaces/store";

import { authStore } from "@store/.";

const useAuthStore = (): AuthStore => {
  return useStore(authStore);
};

export default useAuthStore;
