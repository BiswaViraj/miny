import {
  Box,
  Card,
  CardContent,
  Stack,
  styled,
  SvgIconTypeMap,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import InsightsIcon from "@mui/icons-material/Insights";
import BoltLogo from "../Bolt";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export type HomeCardProps = {
  children: React.ReactNode;
  title: string;
  content: string;
};

const CardStyle = styled(Card)(({ theme }) => ({
  maxWidth: 360,
  minHeight: 390,
  textAlign: "center",
  padding: theme.spacing(5, 4),
  borderRadius: 8,
}));

const IconBoxStyle = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const IconStyle = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  borderRadius: "50%",
  backgroundColor: theme.palette.background.paper,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  ...theme.typography.h2,
}));

const HomeCard = ({ content, children, title }: HomeCardProps) => {
  return (
    <CardStyle elevation={3}>
      <IconBoxStyle>
        <IconStyle>{children}</IconStyle>
      </IconBoxStyle>
      <CardContent>
        <Stack spacing={4}>
          <Typography
            variant="h4"
            fontWeight={"bold"}
            color="primary"
            letterSpacing={"2px"}
          >
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {content}
          </Typography>
        </Stack>
      </CardContent>
    </CardStyle>
  );
};

export default HomeCard;
