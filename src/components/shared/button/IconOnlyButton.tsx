import { OnlyIconButtonProps } from "@interfaces/component";

import BaseButton from "./BaseButton";

const IconOnlyButton = ({
  Icon,
  ...props
}: OnlyIconButtonProps): JSX.Element => {
  return (
    <BaseButton {...props}>
      <Icon />
    </BaseButton>
  );
};

export default IconOnlyButton;
