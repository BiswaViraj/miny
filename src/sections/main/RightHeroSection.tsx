import { Stack, Typography, List, ListItem, Icon } from "@mui/material";
import React from "react";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import InsightsIcon from "@mui/icons-material/Insights";
import BoltLogo from "../../components/Bolt";

const RightHeroSection = () => {
  return (
    <Stack spacing={2}>
      <Typography
        variant="h1"
        fontWeight={"bold"}
        letterSpacing="1px"
        component={"h2"}
        alignItems="flex-end"
      >
        Lightning fast
        <br /> URL Shortener
        <BoltLogo />
      </Typography>

      <List>
        <ListItem>
          <Typography
            variant="subtitle1"
            alignItems="center"
            component={"span"}
          >
            <BoltLogo /> Fast:
            <Typography component="span" color="text.secondary">
              {" "}
              Shorten all your long URLs with a click.
            </Typography>
          </Typography>
        </ListItem>
        <ListItem>
          <Typography
            variant="subtitle1"
            alignItems="center"
            component={"span"}
          >
            <Icon component={AutoFixHighIcon} fontSize="inherit" /> Easy
            customisation :
            <Typography component="span" color="text.secondary">
              {" "}
              Control your URL alias and choose when to expire
            </Typography>
          </Typography>
        </ListItem>
        <ListItem>
          <Typography
            variant="subtitle1"
            alignItems="center"
            component={"span"}
          >
            <Icon component={InsightsIcon} fontSize="inherit" /> Analytics:
            <Typography component="span" color="text.secondary">
              {" "}
              Monitor all your URLs on{" "}
              <Typography component="span" fontWeight={"bold"} color="primary">
                Miny
              </Typography>
            </Typography>
          </Typography>
        </ListItem>
      </List>
    </Stack>
  );
};

export default RightHeroSection;
