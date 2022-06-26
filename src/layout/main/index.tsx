import React from "react";
import { Stack } from "@mui/material";
import MainHeader from "./MainHeader";

type Props = {
  children: React.ReactNode;
};
export default function MainLayout({ children }: Props) {
  return (
    <Stack
      sx={{
        minHeight: 1,
      }}
    >
      <MainHeader />
      <p>Hello</p>
      {children}
    </Stack>
  );
}
