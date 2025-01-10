import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// Helper function for px to rem conversion
function pxToRem(px) {
  return `${px / 16}rem`;
}

const colors = {
  primary: {
    blueLight: "#EDF9FD",
    purpleLight: "#F1F0FF",
    yellowLight: "#FDF6D8",
    blue: "#C3EBFA",
    purple: "#CFCEFF",
    yellow: "#FAE27C",
    disableGrey: "#A7A9AA",
  },
};

let theme = createTheme({
  palette: {
    error: {
      main: "#FF434D",
    },
    success: {
      main: "#00997E",
    },
    custom: {
      blueLight: colors.primary.blueLight,
      purpleLight: colors.primary.purpleLight,
      yellowLight: colors.primary.yellowLight,
      blue: colors.primary.blue,
      purple: colors.primary.purple,
      yellow: colors.primary.yellow,
      disableGrey: colors.primary.disableGrey,
    },
  },
  typography: {
    h1: {
      fontWeight: 800,
      lineHeight: 80 / 64,
      fontSize: pxToRem(40),
      "@media (min-width:600px)": {
        fontSize: pxToRem(52),
      },
      "@media (min-width:900px)": {
        fontSize: pxToRem(58),
      },
      "@media (min-width:1200px)": {
        fontSize: pxToRem(64),
      },
    },
    h2: {
      fontWeight: 800,
      lineHeight: 64 / 48,
      fontSize: pxToRem(32),
      "@media (min-width:600px)": {
        fontSize: pxToRem(40),
      },
      "@media (min-width:900px)": {
        fontSize: pxToRem(44),
      },
      "@media (min-width:1200px)": {
        fontSize: pxToRem(48),
      },
    },
    h3: {
      fontWeight: 700,
      lineHeight: 1.5,
      fontSize: pxToRem(24),
      "@media (min-width:600px)": {
        fontSize: pxToRem(26),
      },
      "@media (min-width:900px)": {
        fontSize: pxToRem(30),
      },
      "@media (min-width:1200px)": {
        fontSize: pxToRem(32),
      },
    },
    h4: {
      fontWeight: 700,
      lineHeight: 1.5,
      fontSize: pxToRem(20),
      "@media (min-width:600px)": {
        fontSize: pxToRem(20),
      },
      "@media (min-width:900px)": {
        fontSize: pxToRem(24),
      },
      "@media (min-width:1200px)": {
        fontSize: pxToRem(24),
      },
    },
    h5: {
      fontWeight: 700,
      lineHeight: 1.5,
      fontSize: pxToRem(18),
      "@media (min-width:600px)": {
        fontSize: pxToRem(19),
      },
      "@media (min-width:900px)": {
        fontSize: pxToRem(20),
      },
      "@media (min-width:1200px)": {
        fontSize: pxToRem(20),
      },
    },
    h6: {
      fontWeight: 700,
      lineHeight: 28 / 18,
      fontSize: pxToRem(17),
      "@media (min-width:600px)": {
        fontSize: pxToRem(18),
      },
      "@media (min-width:900px)": {
        fontSize: pxToRem(18),
      },
      "@media (min-width:1200px)": {
        fontSize: pxToRem(18),
      },
    },
    subtitle1: {
      fontWeight: 600,
      lineHeight: 1.5,
      fontSize: pxToRem(16),
    },
    subtitle2: {
      fontWeight: 600,
      lineHeight: 22 / 14,
      fontSize: pxToRem(14),
    },
    body1: {
      lineHeight: 1.5,
      fontSize: pxToRem(16),
    },
    body2: {
      lineHeight: 22 / 14,
      fontSize: pxToRem(14),
    },
    caption: {
      lineHeight: 1.5,
      fontSize: pxToRem(12),
    },
    overline: {
      fontWeight: 700,
      lineHeight: 1.5,
      fontSize: pxToRem(12),
      textTransform: "uppercase",
    },
    button: {
      fontWeight: 700,
      lineHeight: 24 / 14,
      fontSize: pxToRem(14),
      textTransform: "unset",
    },
  },
});

// Enable responsive font sizes in the theme
theme = responsiveFontSizes(theme);

export default theme;
