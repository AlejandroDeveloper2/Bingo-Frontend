import { BaseInputProps } from "@interfaces/component";

import { ErrorMessage } from "@components/.";

import { InputBody, InputContainer } from "./Input.style";

const BaseInput = ({
  label,
  name,
  Icon,
  errorMessage,
  children,
}: BaseInputProps): JSX.Element => {
  return (
    <InputContainer>
      <label htmlFor={name} id="input-label">
        {label}
      </label>
      <InputBody id={name}>
        <Icon />
        {children}
      </InputBody>
      {errorMessage ? <ErrorMessage message={errorMessage} /> : null}
    </InputContainer>
  );
};

export default BaseInput;
