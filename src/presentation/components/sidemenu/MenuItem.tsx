import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import { Link } from "react-scroll";
import { styles } from "./SideMenuStyles";

interface MenuItemProps {
  to: string;
  label: string;
  handleOpenDrawer: () => void;
}

const MenuItem = ({ to, label, handleOpenDrawer }: MenuItemProps) => {
  const { listItemButton } = styles();

  return (
    <ListItem disablePadding>
      <ListItemButton sx={listItemButton}>
        <Link
          activeClass="active"
          to={to}
          spy={true}
          smooth={true}
          offset={0}
          duration={100}
          style={{ width: "100%" }}
          onClick={handleOpenDrawer}
        >
          <ListItemText primary={label} />
        </Link>
      </ListItemButton>
    </ListItem>
  );
};

export default MenuItem;
