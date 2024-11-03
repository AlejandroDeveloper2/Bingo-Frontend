import { AtSign, Lock, LogIn } from "iconoir-react";

import { LoginData } from "@interfaces/data";

import { initialLoginErrors, initialLoginValues } from "@constants/index";

import { useAuthStore, useForm, useLoading } from "@hooks/index";
import { validationSchema } from "./ValidationSchema";

import { Form } from "@components/index";

const LoginForm = (): JSX.Element => {
  const { login } = useAuthStore();
  const { loading, toggleLoading } = useLoading();

  const { formRef, data, errors, handleChange, handleSubmit } =
    useForm<LoginData>(
      initialLoginValues,
      initialLoginErrors,
      validationSchema,
      () => {
        login(data, toggleLoading);
      }
    );

  return (
    <Form
      formRef={formRef}
      handleSubmit={handleSubmit}
      formTitle="Iniciar sesión"
    >
      <Form.FieldSet>
        <Form.Input
          type="text"
          placeholder="Escribe tu correo electrónico"
          label="Correo Electrónico"
          name="email"
          value={data.email}
          errorMessage={errors.email.message}
          Icon={AtSign}
          onChange={handleChange}
        />
        <Form.Input
          type="password"
          placeholder="Escribe tu contraseña"
          label="Contraseña"
          name="password"
          value={data.password}
          errorMessage={errors.password.message}
          Icon={Lock}
          onChange={handleChange}
        />
      </Form.FieldSet>
      <Form.Link
        label="¿No tienes una cuenta?"
        link="/createAccount"
        linkLabel="Crear cuenta"
      />
      <Form.Button
        type="submit"
        label="Iniciar sesión"
        title="¡Ingresar al home!"
        onClick={() => {}}
        loading={loading}
        variant="black"
        Icon={LogIn}
      />
    </Form>
  );
};

export default LoginForm;
