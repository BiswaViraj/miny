import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import typography from "./typography";

// Create a theme instance.
const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#57CC99",
    },
    secondary: {
      main: "#38A3A5",
      // light: "#80ED99",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#041C32",
      paper: "#04293A",
    },
  },
  typography,
});

export default theme;
