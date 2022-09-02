import React from "react";
import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const SocialCard = ({
  title,
  icon,
}: {
  title: string;
  icon: React.ReactElement;
}) => {
  return (
    <Button fullWidth sx={{}}>
      <Badge badgeContent={icon}>
        <Typography sx={{p:0.5, px:2}}>{title}</Typography>
      </Badge>
    </Button>
  );
};

export default SocialCard;
