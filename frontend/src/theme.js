"use client";
import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { red, pink, deepOrange } from "@mui/material/colors";

export const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#202020",
    },
    secondary: {
      main: "#D2D2D2",
    },
    error: {
      main: red.A400,
    },
    paper: {
      main: "#EDEDED",
      dark: "#3D3D3D",
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export default theme;
