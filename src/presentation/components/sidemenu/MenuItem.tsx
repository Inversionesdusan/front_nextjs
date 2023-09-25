import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import { Link } from "react-scroll";
import { styles } from "./SideMenuStyles";
import LinkNext from "next/link";

interface MenuItemProps {
  to: string;
  label: string;
  handleOpenDrawer: () => void;
  landing: boolean;
}

const MenuItem = ({ to, label, handleOpenDrawer, landing }: MenuItemProps) => {
  const { listItemButton } = styles();

  return (
    <ListItem disablePadding>
      <ListItemButton sx={listItemButton}>
        {landing ? (
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
        ) : (
          <LinkNext href={`/#${to}`}>{label}</LinkNext>
        )}
      </ListItemButton>
    </ListItem>
  );
};

export default MenuItem;
