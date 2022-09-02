import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material";
import Avatar from "@mui/material/Avatar";

const contactBoxStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "start",
  alignItems: "top",
  mt: 2,
};

const FooterContactBox = ({
  icon,
  value,
  title,
}: {
  icon: React.ReactElement;
  value: string;
  title: string;
}) => {
  const {
    palette: { secondary },
  } = useTheme();
  return (
    <Box sx={contactBoxStyle}>
      <Avatar sx={{ bgcolor: secondary.main, width: 35, height: 35, mr: 2 }}>
        {icon}
      </Avatar>
      <Box sx={{ display: "flex" }}>
        <Typography variant="body2">{title}</Typography>
        <Typography
          variant="body1"
          sx={{ ml: 1, width: "min(200px, 20vw)", overflow: "hidden" }}
        >
          {value}
        </Typography>
      </Box>
    </Box>
  );
};

export default FooterContactBox;
