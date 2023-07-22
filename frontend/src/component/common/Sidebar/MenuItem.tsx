import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

type Props = {
  children: string;
  path: string;
};

export default function MenuItem(props: Props) {
  return (
    <ListItem disablePadding>
      <Link to={props.path}>
        <ListItemButton>
          <ListItemText>{props.children}</ListItemText>
        </ListItemButton>
      </Link>
    </ListItem>
  );
}
