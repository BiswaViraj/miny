import React from "react";
import MuiButton, { LoadingButtonProps } from "@mui/lab/LoadingButton";
type IProps = {
  text: string;
};
type Props = IProps & LoadingButtonProps;
const LoadingButton = ({
  variant = "contained",
  text,
  loading,
  ...other
}: Props) => {
  return (
    <MuiButton variant={variant} loading={loading} {...other}>
      {text}
    </MuiButton>
  );
};

export default LoadingButton;
