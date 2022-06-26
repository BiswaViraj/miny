import { AppBar, Button, Stack, Toolbar, Typography } from "@mui/material";
import React from "react";

const MainHeader = () => {
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          ⚡Miny
        </Typography>
        <Stack spacing={2} direction="row">
          <Button variant="text" color="secondary">
            Login
          </Button>
          <Button variant="text">Signup</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default MainHeader;
