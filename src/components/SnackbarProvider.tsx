import React from "react";
import { SnackbarProvider as Provider } from "notistack";
type Props = {
  children: React.ReactNode;
};
const SnackbarProvider = ({ children }: Props) => {
  return (
    <Provider
      preventDuplicate
      maxSnack={3}
      autoHideDuration={3000}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      {children}
    </Provider>
  );
};

export default SnackbarProvider;
