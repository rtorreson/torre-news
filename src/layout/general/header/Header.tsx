import React, { useState } from "react";
import dynamic from "next/dynamic";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { GetMenuItems } from "./libraries/HeaderMenuItems";
import { DeviceType } from "@modules/general/libraries/device-type";
import HideOnScroll from "@modules/hoc/components/hide-on-scroll/HideOnScroll";
import { CONTAINER_WIDTH } from "@modules/general/libraries/constants";

const Logo = dynamic(() => import("@modules/general/components/logo")),
  MenuButton = dynamic(
    () =>
      import(
        "@root/modules/general/components/nav/nav-menu-horizontal/menu-button"
      )
  ),
  NavMenuHorizontal = dynamic(
    () => import("@root/modules/general/components/nav/nav-menu-horizontal")
  ),
  NavDrawer = dynamic(() => import("@modules/general/components/nav/drawer"));

const menuItems = GetMenuItems();

const Header = ({ deviceType }: { deviceType: DeviceType }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer =
    (open: boolean | undefined = undefined) =>
    () =>
      setDrawerOpen((prevState) => (open === undefined ? !prevState : open));

  return (
    <>
      <HideOnScroll>
        <AppBar sx={{zIndex:3, maxWidth: "100vw"}}>
          <Toolbar sx={{ width: CONTAINER_WIDTH, mx: "auto" }}>
            <Box
              sx={{
                mt: 1,
                mb: 1,
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                alignItems: "center",
              }}
            >
              <Logo {...{ complete: !deviceType.isMobile }} />
              {deviceType.isMobile && <MenuButton onClick={toggleDrawer()} />}
            </Box>
          </Toolbar>
          {!deviceType.isMobile && <NavMenuHorizontal {...{ menuItems }} />}
        </AppBar>
      </HideOnScroll>
      <Toolbar></Toolbar>
      <Toolbar></Toolbar>
      <Toolbar></Toolbar>
      <NavDrawer
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        menuItems={menuItems}
      />
    </>
  );
};

export default Header;
