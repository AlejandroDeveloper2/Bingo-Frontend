import { AtSign, Lock, PlusCircle, User } from "iconoir-react";

import { CreateAccountData } from "@interfaces/data";

import { initialRegisterValues, initialRegisterErrors } from "@constants/index";

import { useAuthStore, useForm, useLoading } from "@hooks/index";
import { validationSchema } from "./ValidationSchema";

import { Form } from "@components/index";

const RegisterForm = (): JSX.Element => {
  const { createAccount } = useAuthStore();
  const { loading, toggleLoading } = useLoading();

  const { formRef, data, errors, handleChange, handleSubmit } =
    useForm<CreateAccountData>(
      initialRegisterValues,
      initialRegisterErrors,
      validationSchema,
      () => {
        createAccount(data, toggleLoading);
      }
    );

  return (
    <Form
      formRef={formRef}
      handleSubmit={handleSubmit}
      formTitle="Crear cuenta "
    >
      <Form.FieldSet>
        <Form.Input
          type="text"
          placeholder="Escribe tu nombre completo"
          label="Nombres"
          name="name"
          value={data.name}
          errorMessage={errors.name.message}
          Icon={User}
          onChange={handleChange}
        />
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
        <Form.Input
          type="password"
          placeholder="Confirma tu contraseña"
          label="Confirmar contraseña"
          name="confirmPassword"
          value={data.confirmPassword}
          errorMessage={errors.confirmPassword.message}
          Icon={Lock}
          onChange={handleChange}
        />
      </Form.FieldSet>
      <Form.Link
        label="¿Ya tienes una cuenta?"
        link="/"
        linkLabel="Inicia sesión"
      />
      <Form.Button
        type="submit"
        label="Crear cuenta"
        title="¡Crear nueva cuenta!"
        onClick={() => {}}
        loading={loading}
        variant="black"
        Icon={PlusCircle}
      />
    </Form>
  );
};

export default RegisterForm;
