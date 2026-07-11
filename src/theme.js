import { createTheme } from "@mui/material/styles";

/**
 * "Ledger" theme — a studio identity built around deep forest green
 * and a brass/gold accent, on a warm parchment background. Chosen
 * deliberately over the two AI-default looks (cream + terracotta,
 * or near-black + neon) so the brand doesn't read as templated.
 *
 * Token summary:
 *   Color  — Forest #14432B / Brass #C89B3C / Parchment #F6F4EC / Ink #1B1F1C
 *   Type   — Fraunces (display, restrained) + Inter (body) + IBM Plex Mono (labels/data)
 *   Shape  — crisp corners (6–10px), hairline dividers, flat surfaces over heavy shadow
 *   Signature — brass mono "eyebrow" labels (uppercase, tracked-out) marking section kickers
 */

const forest = {
  main: "#0b171c",
  light: "#3C6B4F",
  dark: "#0C2E1D",
  contrastText: "#7f6911",
};

const brass = {
  main: "#C89B3C",
  light: "#D9B463",
  dark: "#A67C24",
  contrastText: "#14432B",
};

const theme = createTheme({
  palette: {
    mode: "light",
    primary: forest,
    secondary: brass,
    background: {
      default: "#8800ff", // warm parchment, not the generic cream/terracotta cream
      paper: "#ffffff",
    },
    text: {
      primary: "#000000",
      secondary: "#000000",
    },
    divider: "rgba(20, 67, 43, 0.14)",
    success: { main: "#2E6B4F" },
    warning: { main: "#B98226" },
    error: { main: "#A5432E" },
    info: { main: "#000000" },
  },

  typography: {
    fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
    h1: {
      fontFamily: '"Fraunces", Georgia, serif',
      fontWeight: 600,
      letterSpacing: "-0.01em",
      lineHeight: 1.08,
    },
    h2: {
      fontFamily: '"Fraunces", Georgia, serif',
      fontWeight: 600,
      letterSpacing: "-0.01em",
      lineHeight: 1.12,
    },
    h3: {
      fontFamily: '"Fraunces", Georgia, serif',
      fontWeight: 600,
      lineHeight: 1.16,
    },
    h4: {
      fontFamily: '"Fraunces", Georgia, serif',
      fontWeight: 600,
      lineHeight: 1.2,
    },
    h5: {
      fontFamily: '"Fraunces", Georgia, serif',
      fontWeight: 500,
    },
    h6: {
      fontFamily: '"Fraunces", Georgia, serif',
      fontWeight: 500,
    },
    subtitle1: { fontWeight: 500 },
    body1: { fontSize: "1rem", lineHeight: 1.65 },
    body2: { fontSize: "0.9rem", lineHeight: 1.6, color: "#565F59" },
    // "eyebrow" label style — the theme's signature element.
    overline: {
      fontFamily: '"IBM Plex Mono", "Roboto Mono", monospace',
      fontSize: "0.72rem",
      fontWeight: 500,
      letterSpacing: "0.14em",
      color: "#ffc74f",
    },
    caption: {
      fontFamily: '"IBM Plex Mono", "Roboto Mono", monospace',
      fontSize: "0.75rem",
      color: "#565F59",
    },
    button: { textTransform: "none", fontWeight: 600 },
  },

  shape: {
    borderRadius: 8,
  },

  shadows: [
    "none",
    "0 1px 2px rgba(20,67,43,0.06)",
    "0 2px 4px rgba(20,67,43,0.07)",
    "0 3px 6px rgba(20,67,43,0.08)",
    "0 4px 8px rgba(20,67,43,0.08)",
    "0 6px 12px rgba(20,67,43,0.09)",
    "0 8px 16px rgba(20,67,43,0.10)",
    "0 8px 16px rgba(20,67,43,0.10)",
    "0 8px 16px rgba(20,67,43,0.10)",
    "0 8px 16px rgba(20,67,43,0.10)",
    "0 8px 16px rgba(20,67,43,0.10)",
    "0 8px 16px rgba(20,67,43,0.10)",
    "0 8px 16px rgba(20,67,43,0.10)",
    "0 8px 16px rgba(20,67,43,0.10)",
    "0 8px 16px rgba(20,67,43,0.10)",
    "0 8px 16px rgba(20,67,43,0.10)",
    "0 8px 16px rgba(20,67,43,0.10)",
    "0 8px 16px rgba(20,67,43,0.10)",
    "0 8px 16px rgba(20,67,43,0.10)",
    "0 8px 16px rgba(20,67,43,0.10)",
    "0 8px 16px rgba(20,67,43,0.10)",
    "0 8px 16px rgba(20,67,43,0.10)",
    "0 8px 16px rgba(20,67,43,0.10)",
    "0 8px 16px rgba(20,67,43,0.10)",
    "0 8px 16px rgba(20,67,43,0.10)",
  ],

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "::selection": {
          backgroundColor: "rgba(200, 155, 60, 0.35)",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: { boxShadow: "none" },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 6,
          paddingInline: 22,
          paddingBlock: 9,
        },
        containedPrimary: {
          "&:hover": { backgroundColor: forest.dark },
        },
        containedSecondary: {
          "&:hover": { backgroundColor: brass.dark },
        },
        outlined: {
          borderWidth: 1.5,
          "&:hover": { borderWidth: 1.5 },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          border: "1px solid rgba(20, 67, 43, 0.12)",
          backgroundImage: "none",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 500,
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: "rgba(20, 67, 43, 0.14)",
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: brass.dark,
            borderWidth: 1.5,
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: forest.main,
          textUnderlineOffset: "3px",
        },
      },
    },
  },
});

export default theme;