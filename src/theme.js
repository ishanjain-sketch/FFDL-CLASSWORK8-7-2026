import { createTheme } from "@mui/material/styles";

/**
 * Design tokens
 * ---------------------------------------------------------
 * Ink   #14213D  – primary, headers, dark surfaces
 * Amber #F5A300  – secondary/accent, CTAs, highlights (same in both modes)
 * Slate #4B5563  – secondary text
 * Mist  #F7F8FA  – light-mode background
 * Line  #E5E7EB  – light-mode hairline borders
 *
 * Dark mode inverts surfaces (ink-navy background, light text) while
 * keeping amber as the one constant accent, so the brand still reads
 * as the same site in either mode.
 *
 * Type: "Sora" for display/headings, "Inter" for body/UI.
 * Fonts are loaded via @import in index.css.
 */

const shared = {
  shape: {
    borderRadius: 14,
  },
  typography: {
    fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
    h1: {
      fontFamily: '"Sora", sans-serif',
      fontWeight: 800,
      letterSpacing: "-0.02em",
      lineHeight: 1.08,
    },
    h2: {
      fontFamily: '"Sora", sans-serif',
      fontWeight: 700,
      letterSpacing: "-0.01em",
      lineHeight: 1.15,
    },
    h3: { fontFamily: '"Sora", sans-serif', fontWeight: 700 },
    h4: { fontFamily: '"Sora", sans-serif', fontWeight: 700 },
    h5: { fontFamily: '"Sora", sans-serif', fontWeight: 600 },
    h6: { fontFamily: '"Sora", sans-serif', fontWeight: 600 },
    button: {
      fontFamily: '"Sora", sans-serif',
      fontWeight: 600,
      textTransform: "none",
      letterSpacing: 0,
    },
    body1: { lineHeight: 1.7 },
    body2: { lineHeight: 1.65 },
  },
};

export default function getTheme(mode) {
  const isDark = mode === "dark";

  return createTheme({
    ...shared,
    palette: {
      mode,
      primary: isDark
        ? {
            main: "#3A4876",
            dark: "#1E2A52",
            light: "#6B7AA8",
            contrastText: "#FFFFFF",
          }
        : {
            main: "#1E2A52",
            dark: "#14213D",
            light: "#3A4876",
            contrastText: "#FFFFFF",
          },
      secondary: {
        main: "#F5A300",
        dark: "#CC8600",
        light: "#FFC24D",
        contrastText: "#14213D",
      },
      text: isDark
        ? { primary: "#F4F5F7", secondary: "#A7ADBE" }
        : { primary: "#14213D", secondary: "#5B6272" },
      background: isDark
        ? { default: "#0F1626", paper: "#161F36" }
        : { default: "#F7F8FA", paper: "#FFFFFF" },
      divider: isDark ? "rgba(255,255,255,0.08)" : "#E5E7EB",
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 999,
            paddingLeft: 22,
            paddingRight: 22,
            paddingTop: 10,
            paddingBottom: 10,
            transition:
              "transform 0.3s cubic-bezier(0.16,1,0.3,1), box-shadow 0.3s ease",
            "&:hover": { transform: "translateY(-2px)" },
          },
          containedSecondary: {
            boxShadow: "none",
            "&:hover": {
              boxShadow: "0 10px 24px -8px rgba(245,163,0,0.5)",
            },
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
            border: `1px solid ${isDark ? "rgba(255,255,255,0.08)" : "#E5E7EB"}`,
            boxShadow: "none",
            transition:
              "transform 0.35s cubic-bezier(0.16,1,0.3,1), box-shadow 0.35s ease",
            "&:hover": {
              transform: "translateY(-4px)",
              boxShadow: isDark
                ? "0 20px 40px -16px rgba(0,0,0,0.5)"
                : "0 20px 40px -16px rgba(20,33,61,0.18)",
            },
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: { boxShadow: "none" },
        },
      },
    },
  });
}