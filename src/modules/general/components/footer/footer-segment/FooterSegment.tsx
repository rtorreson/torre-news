import React from "react";
import Box from "@mui/material/Box";
import styles from "./footer-segment.module.scss";
import Typography from "@mui/material/Typography";
import { FooterSegmentTitle } from "@modules/general/libraries/generalTypes";

const FooterSegment = ({
  children,
  title,
}: {
  children: any;
  title: FooterSegmentTitle;
}) => {
  return (
    <Box>
      <Typography variant="h6">{title}</Typography>
      <Box sx={{mt:2}}>{children}</Box>
    </Box>
  );
};

export default FooterSegment;
