import React from "react";
import List from "@mui/material/List";
import Drawer from "@mui/material/Drawer";
import { MenuItem } from "@modules/general/libraries/generalTypes";
import DrawerItem from "./drawer-item";

const NavDrawer = ({
  open,
  onClose,
  menuItems,
}: {
  open: boolean;
  onClose: () => void;
  menuItems: MenuItem[];
}) => {
  return (
    <Drawer {...{ anchor: "right", open, onClose }}>
      <List sx={{mx:3}}>
        {menuItems.map((item) => <DrawerItem key={item.id} item={item} />)}
      </List>
    </Drawer>
  );
};

export default NavDrawer;
