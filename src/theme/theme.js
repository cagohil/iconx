import { createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#156CB5",
      second: "#D9EAFD",
      third: "#094d85",
    },
    secondary: {
      main: "#fff",
    },
  },
  typography: {
    fontFamily: "Arial",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "*, *::before, *::after": {
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
        },
        body: {
          margin: 0,
          padding: 0,
        },
      },
    },
  },
});

export default theme;
