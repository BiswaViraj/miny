import React from "react";
import { Stack } from "@mui/material";
import MainHeader from "./MainHeader";
import UrlDrawer from "../../components/urlDrawer/UrlDrawer";
import useURLDrawer from "../../hooks/useURLDrawer";
import { URLDrawerContextProvider } from "../../context/URLDrawerContext";

type Props = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: Props) {
  return (
    <URLDrawerContextProvider>
      <Content>{children}</Content>
    </URLDrawerContextProvider>
  );
}

function Content({ children }: Props) {
  const { open } = useURLDrawer();
  return (
    <Stack
      sx={{
        minHeight: 1,
      }}
    >
      <MainHeader />
      {children}
      <UrlDrawer open={open} />
    </Stack>
  );
}
