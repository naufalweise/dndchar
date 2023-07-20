import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/component/common/Navbar";
import theme, { roboto } from "@/theme";
import { ThemeProvider } from "@mui/material/styles";

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
      <body className={inter.className}>
        <ThemeProvider theme={theme}>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
