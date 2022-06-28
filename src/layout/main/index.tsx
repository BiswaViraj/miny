import React from "react";
import { Box, Stack } from "@mui/material";
import MainHeader from "./MainHeader";
import UrlDrawer from "../../components/urlDrawer/UrlDrawer";
import useURLDrawer from "../../hooks/useURLDrawer";
import { URLDrawerContextProvider } from "../../context/URLDrawerContext";
import MainFooter from "./MainFooter";

type Props = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: Props) {
  return (
    <URLDrawerContextProvider>
      <Content>{children}</Content>
      <Box sx={{ flexGrow: 1 }} />
      <MainFooter />
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
