"use client";
import Drawer from "@mui/material/Drawer";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material";
import MenuItem from "./MenuItem";

const sidebarWidth = 100;

export default function Sidebar() {
  return (
    <Drawer
      sx={{
        flexShrink: 0,
        width: sidebarWidth,
        [`& .MuiDrawer-paper`]: {
          width: sidebarWidth,
          boxSizing: "border-box",
          backgroundColor: "secondary.main",
        },
      }}
      variant="permanent"
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <List>
          <MenuItem path="">Main Sheet</MenuItem>
          <MenuItem path="/inventory">Inventory</MenuItem>
          <MenuItem path="/spells">Spells</MenuItem>
        </List>
      </Box>
    </Drawer>
  );
}
