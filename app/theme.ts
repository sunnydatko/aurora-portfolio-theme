"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      light: "#F9A8D4",
      main: "#EC4899",
      dark: "#BE185D",
    },
    secondary: {
      light: "#6D28D9",
      main: "#2E1065",
      dark: "#0d0616",
    },
    error: {
      light: "#FDA4AF",
      main: "#F43F5E",
      dark: "#E11D48",
    },
    background: {
      default: "#0c0819",
      paper: "#140d28",
    },
    grey: {
      100: "#F8FAFC",
      200: "#E2E8F0",
      300: "#CBD5E1",
      400: "#94A3B8",
      500: "#64748B",
      600: "#475569",
      700: "#334155",
      800: "#1E293B",
      900: "#0F172A",
    },
  },
  typography: {
    fontFamily: "var(--font-inter), sans-serif",
    h1: {
      fontFamily: "var(--font-space-grotesk), sans-serif",
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontFamily: "var(--font-space-grotesk), sans-serif",
      fontWeight: 700,
    },
    h3: {
      fontFamily: "var(--font-space-grotesk), sans-serif",
      fontWeight: 600,
    },
    h4: {
      fontFamily: "var(--font-space-grotesk), sans-serif",
      fontWeight: 600,
    },
    h5: {
      fontFamily: "var(--font-space-grotesk), sans-serif",
      fontWeight: 600,
    },
    h6: {
      fontFamily: "var(--font-space-grotesk), sans-serif",
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      defaultProps: { variant: "contained", disableElevation: true, disableRipple: true },
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 4,
          fontFamily: "var(--font-inter), sans-serif",
          fontWeight: 500,
        },
      },
    },
    MuiLink: {
      defaultProps: { underline: "none" },
      styleOverrides: {
        root: {
          textDecoration: "none",
          color: "#EC4899",
          transition: "color 0.3s",
          position: "relative",
          paddingBottom: "3px",
          "&::before": {
            content: '""',
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "2px",
            borderRadius: "4px",
            backgroundColor: "#F9A8D4",
            transformOrigin: "right",
            transform: "scaleX(0)",
            transition: "transform 0.3s ease-in-out",
          },
          "&:hover": {
            color: "#F9A8D4",
            "&::before": {
              transformOrigin: "left",
              transform: "scaleX(1)",
            },
          },
        },
      },
    },
  },
});

export default theme;
