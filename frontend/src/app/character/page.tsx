"use client";
import Sidebar from "@/component/common/Sidebar";
import { Box, Container, Toolbar, Typography } from "@mui/material";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import MainSheetPane from "./panes/MainSheetPane";
import InventoryPane from "./panes/InventoryPane";
import SpellsPane from "./panes/SpellsPane";

const router = createBrowserRouter([
  {
    path: "/character",
    element: <Root />,
    children: [
      {
        path: "mainsheet",
        element: <MainSheetPane />,
      },
      {
        path: "/character/inventory",
        element: <InventoryPane />,
      },
      {
        path: "/character/spells",
        element: <SpellsPane />,
      },
    ],
  },
]);

function Root() {
  return (
    <>
      <Sidebar />
      <Box>
        <Toolbar />
        <Container sx={{ backgroundColor: "paper.dark", p: 2 }}>
          <Outlet />
        </Container>
      </Box>
    </>
  );
}

export default function Page() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
