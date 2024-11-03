/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

import { useAuthStore } from "@hooks/.";

const useSession = (sessionTimer: number): void => {
  const [sessionInterval, setSessionInterval] = useState<number>(0);
  const { authData, verifyUserAuth } = useAuthStore();

  useEffect(() => {
    const checkSessionDuration = (): void => {
      if (sessionTimer === 0) {
        verifyUserAuth();
        return;
      }
      setSessionInterval(
        window.setInterval(() => {
          const currentDate = window.Math.floor(Date.now() / 1000);
          const expirationDate = authData ? authData.exp : 0;

          if (currentDate >= expirationDate) {
            verifyUserAuth();
          }
        }, sessionTimer)
      );
    };
    checkSessionDuration();
    return () => window.clearInterval(sessionInterval);
  }, [authData, sessionTimer]);
};

export default useSession;
