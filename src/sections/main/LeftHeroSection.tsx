import { Box, Stack, styled, Typography } from "@mui/material";
import React from "react";
import URLInput from "../../components/urlInput/URLInput";

const BoxStyle = styled(Box)(({ theme }) => ({
  padding: theme.spacing(5),
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
  opacity: 0.8,
}));
const LeftHeroSection = () => {
  return (
    <Stack spacing={2}>
      <Typography variant="h4">Shorten Your Link</Typography>
      <BoxStyle>
        <URLInput />
      </BoxStyle>
    </Stack>
  );
};

export default LeftHeroSection;
