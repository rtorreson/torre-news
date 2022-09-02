import React from "react";
import dynamic from "next/dynamic";
import Header from "@root/layout/general/header";
import { DeviceType } from "@root/modules/general/libraries/device-type";

const Footer = dynamic(() => import("@root/layout/general/footer"))

const SiteLayout = ({ children, deviceType }: { children: any, deviceType:DeviceType }) => {
  return (
    <>
      <Header {...{deviceType}} />
      <main>
        {children}
      </main>
      <Footer {...{deviceType}} />
    </>
  );
};

export default SiteLayout;
