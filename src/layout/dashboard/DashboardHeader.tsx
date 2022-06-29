import { AppBar, Box, Button, Stack, Toolbar, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import React from "react";
import BoltLogo from "../../components/BoltLogo";
import Link from "../../components/Link";
import useAuth from "../../hooks/useAuth";
import { PATH_AUTH, PATH_DASHBOARD } from "../../utils/routes";

const DashboardHeader = () => {
  const { logout } = useAuth();
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();

  const handleLogout = async () => {
    try {
      await logout();
      router.replace(PATH_AUTH.login);
    } catch (error) {
      console.error(error);
      enqueueSnackbar("Unable to logout!", { variant: "error" });
    }
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
            <Link href={`${PATH_DASHBOARD.general.urls}`} underline="none">
              <Button variant="text" color="secondary">
                URLs
              </Button>
            </Link>

            <Button variant="text" color="secondary" onClick={handleLogout}>
              Logout
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default DashboardHeader;
