"use client";
import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

type Route = {
  name: String;
  path: String;
};

export default function Navbar() {
  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: "flex" }}>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Undo</Button>
          <Button color="inherit">Redo</Button>
          <Button color="inherit">Share</Button>
          <Button color="inherit">Export</Button>
          <Box sx={{ flexGrow: 1 }}></Box>
          <Button color="inherit">Profile</Button>
        </Box>
        {/* <Typography variant="h6">Home</Typography>
          <Typography variant="h6">Home</Typography> */}
      </Toolbar>
    </AppBar>
  );
}
