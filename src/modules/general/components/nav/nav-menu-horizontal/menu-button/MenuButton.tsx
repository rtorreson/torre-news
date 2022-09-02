import { IconButton } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";


const MenuButton = ({onClick}:{onClick: () => void}) => {
  return (
    <IconButton {...{onClick}}>
      <MenuIcon sx={{fontSize:"2.5rem"}}/>
    </IconButton>
  );
};

export default MenuButton;
