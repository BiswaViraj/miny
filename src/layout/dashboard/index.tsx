import { Stack } from "@mui/material";
import React from "react";
import { URLDrawerContextProvider } from "../../context/URLDrawerContext";
import DashboardHeader from "./DashboardHeader";

type Props = {
  children: React.ReactNode;
};
const DashboardLayout = ({ children }: Props) => {
  return (
    <URLDrawerContextProvider>
      <Stack
        sx={{
          minHeight: 1,
        }}
      >
        <DashboardHeader />
        {children}
      </Stack>
    </URLDrawerContextProvider>
  );
};

export default DashboardLayout;
