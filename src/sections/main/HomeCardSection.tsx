import { Box, Grid, Stack, styled, Typography } from "@mui/material";
import React from "react";
import HomeCard from "../../components/main/HomeCard";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import InsightsIcon from "@mui/icons-material/Insights";
import BoltLogo from "../../components/Bolt";
import type { HomeCardProps } from "../../components/main/HomeCard";

type CardType = {
  Icon: JSX.Element;
  title: string;
  content: string;
};
const CARDS: CardType[] = [
  {
    Icon: <BoltLogo />,
    title: "Lightning Fast",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, illum est fuga consectetur explicabo porro quasi amet aliquid, dolorem quos, quia quod nulla in. Beatae soluta culpa maiores animi rem!",
  },
  {
    Icon: <AutoFixHighIcon fontSize="inherit" />,
    title: "Customisation",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, illum est fuga consectetur explicabo porro quasi amet aliquid, dolorem quos, quia quod nulla in. Beatae soluta culpa maiores animi rem!",
  },
  {
    Icon: <InsightsIcon fontSize="inherit" />,
    title: "Analytics",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, illum est fuga consectetur explicabo porro quasi amet aliquid, dolorem quos, quia quod nulla in. Beatae soluta culpa maiores animi rem!",
  },
];

const RootStyle = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 5),
}));
const HomeCardSection = () => {
  return (
    <RootStyle>
      <Stack spacing={3}>
        <Typography
          variant="h3"
          textAlign={"center"}
          fontWeight="bold"
          textTransform={"uppercase"}
          fontStyle={{
            textDecoration: "underline",
          }}
        >
          We Provide
        </Typography>
        <Grid container>
          {CARDS.map((card) => {
            const { Icon, title, content } = card;
            return (
              <Grid item xs={12} md={4} key={`card-${card.title}`}>
                <HomeCard title={title} content={content}>
                  {Icon}
                </HomeCard>
              </Grid>
            );
          })}
        </Grid>
      </Stack>
    </RootStyle>
  );
};

export default HomeCardSection;
