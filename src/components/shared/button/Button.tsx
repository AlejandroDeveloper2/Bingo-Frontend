import { ButtonProps } from "@interfaces/component";

import BaseButton from "./BaseButton";

const Button = ({ label, Icon, ...props }: ButtonProps): JSX.Element => {
  return (
    <BaseButton {...props}>
      <Icon />
      <span>{label}</span>
    </BaseButton>
  );
};

export default Button;
