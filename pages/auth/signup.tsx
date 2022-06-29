import { capitalCase } from "change-case";
// next
// @mui
import { styled } from "@mui/material/styles";
import { Box, Card, Container, Typography, Tooltip } from "@mui/material";
import useResponsive from "../../src/hooks/useResponsive";
import PublicGuard from "../../src/guards/PublicGuard";
import { SignupForm } from "../../src/sections/auth/signup";
import { PATH_AUTH } from "../../src/utils/routes";
import BoltLogo from "../../src/components/BoltLogo";
import Link from "../../src/components/Link";

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

const SectionStyle = styled(Card)(({ theme }) => ({
  width: "100%",
  maxWidth: 464,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  margin: theme.spacing(2, 0, 2, 2),
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

export default function Signup() {
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
              Already have an account? {""}
              <Link href={PATH_AUTH.login}>
                <Typography variant="subtitle2" component="span">
                  Login
                </Typography>
              </Link>
            </Typography>
          )}
        </HeaderStyle>

        <Container>
          <ContentStyle>
            <Box sx={{ mb: 5, display: "flex", alignItems: "center" }}>
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="h4" gutterBottom>
                  Signup to Unlock more features on Miny
                </Typography>
              </Box>
            </Box>

            <SignupForm />

            <Typography
              variant="body2"
              align="center"
              sx={{ color: "text.secondary", mt: 3 }}
            >
              By registering, I agree to Miny&apos;s&nbsp;
              <Link color="text.primary" href="#">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link color="text.primary" href="#">
                Privacy Policy
              </Link>
              .
            </Typography>

            {!smUp && (
              <Typography variant="body2" sx={{ mt: 3, textAlign: "center" }}>
                Already have an account?{" "}
                <Link href={PATH_AUTH.login}>
                  <Typography variant="subtitle2" component="span">
                    Login
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
