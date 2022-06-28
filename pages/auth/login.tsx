import { capitalCase } from "change-case";
// @mui
import { styled } from "@mui/material/styles";
import {
  Box,
  Card,
  Stack,
  Alert,
  Tooltip,
  Container,
  Typography,
} from "@mui/material";

import { PATH_AUTH } from "../../src/utils/routes";
import BoltLogo from "../../src/components/BoltLogo";
import Link from "../../src/components/Link";
import useAuth from "../../src/hooks/useAuth";
import useResponsive from "../../src/hooks/useResponsive";
import PublicGuard from "../../src/guards/PublicGuard";
import { LoginForm } from "../../src/sections/auth/login";
import Image from "next/image";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
}));

const HeaderStyle = styled("header")(({ theme }) => ({
  top: 0,
  zIndex: 9,
  lineHeight: 0,
  width: "100%",
  display: "flex",
  alignItems: "center",
  position: "absolute",
  padding: theme.spacing(3),
  justifyContent: "space-between",
  [theme.breakpoints.up("md")]: {
    alignItems: "flex-start",
    padding: theme.spacing(7, 5, 0, 7),
  },
}));

const ContentStyle = styled("div")(({ theme }) => ({
  maxWidth: 480,
  margin: "auto",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function Login() {
  const smUp = useResponsive("up", "sm");

  return (
    <PublicGuard>
      <RootStyle>
        <HeaderStyle>
          <Typography variant="h3">
            <BoltLogo />
          </Typography>
          {smUp && (
            <Typography variant="body2">
              Don&apos;t have an account? {""}
              <Link href={PATH_AUTH.signup}>
                <Typography variant="subtitle2" component="span">
                  Signup
                </Typography>
              </Link>
            </Typography>
          )}
        </HeaderStyle>

        <Container maxWidth="sm">
          <ContentStyle>
            <Stack direction="row" alignItems="center" sx={{ mb: 5 }}>
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="h4" gutterBottom>
                  Sign in to Miny
                </Typography>
                <Typography sx={{ color: "text.secondary" }}>
                  Enter your details below.
                </Typography>
              </Box>
            </Stack>

            <LoginForm />

            {!smUp && (
              <Typography variant="body2" align="center" sx={{ mt: 3 }}>
                Don&apos;t have an account?{" "}
                <Link href={PATH_AUTH.signup}>
                  <Typography variant="subtitle2" component="span">
                    Get started
                  </Typography>
                </Link>
              </Typography>
            )}
          </ContentStyle>
        </Container>
      </RootStyle>
    </PublicGuard>
  );
}
