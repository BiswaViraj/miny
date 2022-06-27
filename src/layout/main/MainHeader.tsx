import { AppBar, Box, Button, Stack, Toolbar, Typography } from "@mui/material";
import React from "react";
import BoltLogo from "../../components/Bolt";
import Link from "../../components/Link";
import useURLDrawer from "../../hooks/useURLDrawer";

const MainHeader = () => {
  const { setOpen } = useURLDrawer();

  const openURLDrawer = () => {
    setOpen(true);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Link href="/" underline="none">
              <Typography
                variant="h4"
                component="div"
                color="primary"
                fontWeight="bold"
                letterSpacing="4px"
              >
                <BoltLogo />
                Miny
              </Typography>
            </Link>
          </Box>
          <Stack spacing={1} direction="row">
            <Button onClick={openURLDrawer}>My URLs</Button>
            <Button variant="text" color="secondary">
              Login
            </Button>
            <Button variant="text" color="secondary">
              Signup
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default MainHeader;
