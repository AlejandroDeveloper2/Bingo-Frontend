import { useStore } from "zustand";

import { BingoStore } from "@interfaces/store";

import { bingoStore } from "@store/.";

const useBingoStore = (): BingoStore => {
  return useStore(bingoStore);
};

export default useBingoStore;
