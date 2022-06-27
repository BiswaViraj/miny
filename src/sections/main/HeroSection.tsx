import { Icon, List, ListItem, Stack, styled, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";
import URLInput from "../../components/urlInput/URLInput";
import LeftHeroSection from "./LeftHeroSection";
import RightHeroSection from "./RightHeroSection";

const RootStyle = styled(Box)(({ theme }) => ({
  padding: theme.spacing(5),
  backgroundImage: "url(/app/assets/hero.svg)",
  height: "100vh",
  width: "100%",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",

  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(3),
  },
}));

const HeroSection = () => {
  return (
    <RootStyle>
      <Grid
        spacing={5}
        direction={{
          md: "row",
          xs: "column-reverse",
        }}
        container
      >
        <Grid item md={6} xs={12}>
          <LeftHeroSection />
        </Grid>
        <Grid item md={6} xs={12}>
          <RightHeroSection />
        </Grid>
      </Grid>
    </RootStyle>
  );
};

export default HeroSection;
