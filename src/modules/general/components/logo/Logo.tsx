import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";

const Logo = ({
  width = "auto",
  maxWidth = "auto",
  complete = true,
}: {
  width?: string;
  maxWidth?: string;
  complete?: boolean;
}) => {
  return (
    <Box sx={{ width, maxWidth }}>
      <Image
        src={`/images/logo-${complete ? "complete" : "icon"}.png`}
        alt="site logo"
        width={complete ? 220 : 65}
        height={complete ? 60 : 60}
      />
    </Box>
  );
};

export default Logo;
