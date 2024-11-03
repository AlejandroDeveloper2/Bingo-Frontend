import { ReactNode } from "react";
import { Loading } from "./data";

type ButtonVariantType = "black" | "white";
type IconType = React.ForwardRefExoticComponent<
  Omit<React.SVGProps<SVGSVGElement>>
>;
type InputType = "password" | "text";
type SpinnerDirectionType = "row" | "column";

interface LoadingScreenProps {
  opacity: number;
  isScreenLoading: boolean;
  children: ReactNode | ReactNode[];
}

interface LoadBarProps {
  load: number;
}

interface LogoProps {
  forNavigation: boolean;
}

interface BaseButtonProps {
  type: "submit" | "button";
  title: string;
  onClick: () => void;
  variant: ButtonVariantType;
  children: ReactNode | ReactNode[];
  border?: boolean;
  loading?: Loading;
}

interface ButtonProps extends Omit<BaseButtonProps, "children"> {
  label: string;
  Icon: IconType;
}

interface OnlyIconButtonProps extends Omit<BaseButtonProps, "children"> {
  Icon: IconType;
}

interface CustomLinkProps {
  label: string;
  link: string;
  linkLabel: string;
}

interface BaseInputProps {
  label: string;
  name: string;
  Icon: IconType;
  errorMessage?: string;
  children?: React.ReactNode | React.ReactNode[];
}

interface InputProps extends BaseInputProps {
  type: InputType;
  placeholder: string;
  value: string;
  disabled?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface ErrorMessageProps {
  message: string;
}

interface FormProps {
  formTitle: string;
  children: React.ReactNode | React.ReactNode[];
  formRef: React.RefObject<HTMLFormElement>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

interface FieldSetProps {
  children: React.ReactNode | React.ReactNode[];
}

interface SpinnerProps {
  color: "white" | "black";
  direction: SpinnerDirectionType;
  message?: string;
}

export type {
  ButtonVariantType,
  IconType,
  InputType,
  SpinnerDirectionType,
  LoadingScreenProps,
  LoadBarProps,
  LogoProps,
  BaseButtonProps,
  ButtonProps,
  OnlyIconButtonProps,
  CustomLinkProps,
  BaseInputProps,
  InputProps,
  ErrorMessageProps,
  FormProps,
  FieldSetProps,
  SpinnerProps,
};
