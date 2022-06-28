import { Box, Divider, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import BoltLogo from "../../components/BoltLogo";
import Copyright from "../../components/Copyright";

const RootStyle = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4, 3),
}));
const MainFooter = () => {
  return (
    <RootStyle>
      <Divider />
      <Container sx={{ pt: 3 }}>
        <Typography
          variant="h5"
          component="div"
          color="primary"
          fontWeight="bold"
          letterSpacing="4px"
          textAlign={"center"}
        >
          <BoltLogo />
          Miny
        </Typography>
        <Copyright />
      </Container>
    </RootStyle>
  );
};

export default MainFooter;
