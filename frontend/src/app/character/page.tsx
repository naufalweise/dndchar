"use client";
import Sidebar from "@/component/common/Sidebar";
import {
  Box,
  Container,
  Toolbar,
  Paper,
  Grid,
  Typography,
} from "@mui/material";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import MainSheetPane from "./panes/MainSheetPane";
import InventoryPane from "./panes/InventoryPane";
import SpellsPane from "./panes/SpellsPane";

const routes = [
  {
    path: "/",
    element: <Root />,
    children: [
      {
        element: <MainSheetPane />,
        index: true,
      },
      {
        path: "inventory",
        element: <InventoryPane />,
      },
      {
        path: "spells",
        element: <SpellsPane />,
      },
    ],
  },
];

const router = createBrowserRouter(routes, {
  basename: "/character",
});

function Root() {
  return (
    <>
      <Sidebar />
      <Box
        sx={{
          backgroundColor: "paper.dark",
          width: "100%",
        }}
      >
        <Toolbar />
        <Grid container spacing={1}>
          <Grid item xs={8}>
            <Container>
              <Box sx={{ py: 3 }}>
                <Outlet />
              </Box>
            </Container>
          </Grid>
          <Grid
            item
            xs={4}
            sx={{ backgroundColor: "paper.main", minHeight: "100vh" }}
          >
            <Typography>Notes</Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default function Page() {
  return <RouterProvider router={router} />;
}
