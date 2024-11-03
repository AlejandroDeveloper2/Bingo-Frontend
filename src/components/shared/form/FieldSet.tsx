import { FieldSetProps } from "@interfaces/component";

import { FieldSetContainer } from "./Form.style";

const FieldSet = ({ children }: FieldSetProps): JSX.Element => {
  return <FieldSetContainer>{children}</FieldSetContainer>;
};

export default FieldSet;
