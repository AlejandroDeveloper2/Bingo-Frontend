import { useState } from "react";

const useModal = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisible = (): void => {
    setIsVisible(!isVisible);
  };

  return {
    isVisible,
    toggleVisible,
  };
};

export default useModal;
