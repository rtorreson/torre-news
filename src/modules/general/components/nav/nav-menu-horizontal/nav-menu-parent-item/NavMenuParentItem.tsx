import React, { useState } from "react";
import Link from "next/link";
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { MenuItem as MenuItemInterface } from "@modules/general/libraries/generalTypes";

const NavMenuParentItem = ({ item }: { item: MenuItemInterface }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = !!anchorEl;
  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) =>
    setAnchorEl(e.currentTarget);
  const closeHandler = () => setAnchorEl(null);
  return (
    <>
      <Button
        sx={{ py: 0, pl: 0 }}
        endIcon={open ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
        onClick={clickHandler}
        variant="text"
        color="secondary"
      >
        <Link href={item.url} passHref>
          <Button>{item.title}</Button>
        </Link>
      </Button>
      <Menu {...{ anchorEl, open, onClose: closeHandler }}>
        {item.children?.map((childItem) => (
          <MenuItem key={childItem.id}>
            <Link href={childItem.url} passHref>
              <Typography variant="subtitle2">{childItem.title.toUpperCase()}</Typography>
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default NavMenuParentItem;
