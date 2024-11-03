/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

const useLoadScreen = () => {
  const [isScreenLoading, setIsScreenLoading] = useState<boolean>(true);
  const [load, setLoad] = useState<number>(0);
  const [loadInterval, setLoadInterval] = useState<number>(0);

  useEffect(() => {
    const runTimer = () => {
      setLoadInterval(
        window.setInterval(() => {
          setLoad((prevLoad) => prevLoad + 10);
        }, 200)
      );
    };
    runTimer();
    return () => window.clearInterval(loadInterval);
  }, []);

  useEffect(() => {
    if (load === 100) {
      window.setTimeout(() => {
        setIsScreenLoading(false);
      }, 1000);
      window.clearInterval(loadInterval);
    }
  }, [load]);

  return { load, isScreenLoading };
};

export default useLoadScreen;
