import Drawer from "@mui/material/Drawer";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material";

export default function Sidebar() {
  return (
    <Drawer
      sx={{
        flexShrink: 0,
        width: 100,
        [`& .MuiDrawer-paper`]: {
          width: 100,
          boxSizing: "border-box",
          backgroundColor: "gray",
        },
      }}
      variant="permanent"
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText>Menu1</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText>Menu2</ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
}
