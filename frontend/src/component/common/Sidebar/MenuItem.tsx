import { ListItem, ListItemButton, ListItemText } from "@mui/material";

type Props = {
  children: string;
};

export default function MenuItem(props: Props) {
  return (
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemText>{props.children}</ListItemText>
      </ListItemButton>
    </ListItem>
  );
}
