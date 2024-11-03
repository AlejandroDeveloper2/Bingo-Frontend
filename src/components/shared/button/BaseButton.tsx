import { BaseButtonProps } from "@interfaces/component";

import { Spinner } from "@components/index";

import { Button } from "./Button.style";

const BaseButton = ({
  variant,
  border,
  children,
  loading,
  ...props
}: BaseButtonProps): JSX.Element => {
  return (
    <Button {...props} variant={variant} border={String(border)}>
      {loading && loading.isLoading ? (
        <Spinner
          message={loading.message}
          color={variant === "black" ? "white" : "black"}
          direction="row"
        />
      ) : (
        children
      )}
    </Button>
  );
};

export default BaseButton;
