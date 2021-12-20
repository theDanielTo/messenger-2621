import { createTheme } from "@material-ui/core";

export const theme = createTheme({
  spacing: 8,
  typography: {
    fontFamily: "Open Sans, sans-serif",
    fontSize: 14,
    h2: {
      fontSize: 24,
      fontWeight: "bold",
      textAlign: "left"
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
    },
    MuiButton: {
      sizeLarge: {
        padding: "1rem 4rem"
      }
    },
    MuiGrid: {
      item: {
        width: "100%",
        marginBottom: "2rem",
        textAlign: "center"
      }
    },
    MuiPaper: {
      elevation3: {
        backgroundColor: "#DEECFF",
        padding: 1,
        margin: 4
      }
    }
  },
  palette: {
    primary: { main: "#3A8DFF" },
    secondary: { main: "#B0B0B0" }
  }
});
