import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "'Nunito Sans', sans-serif",
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 700,
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: 700,
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 700,
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: 700,
    },
    h6: {
      fontSize: "1rem",
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: "1.1rem",
      fontWeight: 400,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.5,
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.43,
    },
  },
  palette: {
    primary: {
      main: "#1EA7FD", // Storybook's primary blue color
      light: "#50B9FF",
      dark: "#0074E8",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#FC521F", // Storybook's secondary color
      light: "#FF7452",
      dark: "#D43B0D",
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#FFFFFF",
      paper: "#F8F8F8",
    },
    text: {
      primary: "#333333",
      secondary: "#666666",
    },
  },
  shape: {
    borderRadius: 4,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none", // Prevents automatic uppercase transformation
          fontWeight: 600,
        },
      },
    },
  },
});

export default theme;
