import { Xmark } from "iconoir-react";

import { ModalProps } from "@interfaces/component";

import { IconOnlyButton, Title } from "@components/.";

import { Dialog, Overlay } from "./Modal.style";

const Modal = ({
  title,
  Icon,
  isVisible,
  toggleVisible,
  children,
}: ModalProps): JSX.Element => {
  return (
    <Overlay isvisible={String(isVisible)}>
      <IconOnlyButton
        Icon={Xmark}
        title="Cerrar modal"
        onClick={toggleVisible}
        type="button"
        variant={"white"}
        border
      />
      <Dialog>
        <Title text={title} Icon={Icon} />
        {children}
      </Dialog>
    </Overlay>
  );
};

export default Modal;
