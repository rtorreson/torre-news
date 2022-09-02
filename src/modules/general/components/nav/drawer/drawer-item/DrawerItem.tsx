import React, { useState } from "react";
import Link from "next/link";
import List from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
import ListItemText from "@mui/material/ListItemText";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ListItemButton from "@mui/material/ListItemButton";
import { MenuItem } from "@modules/general/libraries/generalTypes";

const DrawerItem = ({ item }: { item: MenuItem }) => {
  const hasChildren = !!item.children;
  const [open, setOpen] = useState(false);
  const handleClick = () => hasChildren && setOpen((prevState) => !prevState);

  return (
    <>
      <ListItemButton onClick={handleClick} key={item.id}>
        <ListItemText primary={item.title} />
        {hasChildren ? open ? <ExpandLess /> : <ExpandMore /> : null}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {item.children &&
            item.children.map((childItem) => (
              <ListItemButton key={childItem.id} sx={{ pl: 4 }}>
                <Link href={childItem.url} passHref>
                  <ListItemText primary={childItem.title} />
                </Link>
              </ListItemButton>
            ))}
        </List>
      </Collapse>
    </>
  );
};

export default DrawerItem;
