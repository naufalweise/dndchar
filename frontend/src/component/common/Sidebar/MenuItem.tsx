import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

type Props = {
  children: string;
  path: string;
};

export default function MenuItem(props: Props) {
  return (
    <Link to={props.path}>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemText>{props.children}</ListItemText>
        </ListItemButton>
      </ListItem>
    </Link>
  );
}
