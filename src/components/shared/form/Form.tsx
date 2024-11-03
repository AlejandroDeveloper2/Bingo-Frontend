import { FormProps } from "@interfaces/component";

import { Button, CustomLink, Input } from "@components/.";
import FieldSet from "./FieldSet";

import { FormBody } from "./Form.style";

const Form = ({
  formTitle,
  children,
  formRef,
  handleSubmit,
}: FormProps): JSX.Element => {
  return (
    <FormBody ref={formRef} onSubmit={handleSubmit}>
      <h2>{formTitle}</h2>
      {children}
    </FormBody>
  );
};

Form.FieldSet = FieldSet;
Form.Input = Input;
Form.Button = Button;
Form.Link = CustomLink;

export default Form;
