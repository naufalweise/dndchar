import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/component/common/Navbar";
import theme, { roboto } from "@/theme";
import { ThemeProvider } from "@mui/material/styles";
import Sidebar from "@/component/common/Sidebar";
import CssBaseLine from "@mui/material/CssBaseline";
import { Box, Toolbar } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DnD Char",
  description: "App for making DnD characters.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <Box sx={{ display: "flex" }}>
            <CssBaseLine />
            <Navbar />
            <Sidebar />
            <Toolbar />
            {children}
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}
