import { createTheme } from "@material-ui/core";

export const theme = createTheme({
  spacing: 8,
  typography: {
    fontFamily: "Open Sans, sans-serif",
    fontSize: 14,
    h2: {
      fontSize: 24,
      fontWeight: "bold"
    },
    button: {
      textTransform: "none",
      letterSpacing: 0,
      fontWeight: "bold"
    }
  },
  overrides: {
    MuiInput: {
      input: {
        fontWeight: "bold"
      }
    }
  },
  palette: {
    primary: { main: "#3A8DFF" },
    secondary: { main: "#B0B0B0" }
  }
});
