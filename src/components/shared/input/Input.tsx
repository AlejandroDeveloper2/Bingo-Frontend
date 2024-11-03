import { InputProps } from "@interfaces/component";

import BaseInput from "./BaseInput";

import { InputElement } from "./Input.style";

const Input = ({
  label,
  Icon,
  name,
  errorMessage,
  ...props
}: InputProps): JSX.Element => {
  return (
    <BaseInput
      label={label}
      Icon={Icon}
      name={name}
      errorMessage={errorMessage}
    >
      <InputElement {...props} name={name} autoComplete="off" />
    </BaseInput>
  );
};

export default Input;
