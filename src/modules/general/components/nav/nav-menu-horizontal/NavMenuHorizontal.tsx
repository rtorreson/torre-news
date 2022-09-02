import React from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { MenuItem } from "@modules/general/libraries/generalTypes";
import { CONTAINER_WIDTH } from "@modules/general/libraries/constants";
import NavMenuParentItem from "@root/modules/general/components/nav/nav-menu-horizontal/nav-menu-parent-item";

const NavMenuHorizontal = ({ menuItems }: { menuItems: MenuItem[] }) => {
  return (
    <Box
      sx={{
        width: CONTAINER_WIDTH,
        mx:"auto",
        mb:"0.5rem",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexWrap:"wrap"
      }}
    >
      {menuItems.map((item) => {
        if (item.children) return <NavMenuParentItem {...{ item }} />;
        return (
          <Link key={item.id} href={item.url} passHref>
            <Button variant="text">{item.title}</Button>
          </Link>
        );
      })}
    </Box>
  );
};

export default NavMenuHorizontal;
