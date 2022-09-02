import React from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import { Theme } from "@mui/material";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import { IconType } from "../../../general/libraries/generalTypes";

const NewsCategoryCard = ({
  Icon,
  title,
  url,
  theme,
}: {
  Icon: IconType;
  title: string;
  url: string;
  theme: Theme;
}) => {
  const { palette } = theme;
  return (
    <Box
      sx={{
        width: 165,
        height: 165,
        maxWidth: "80vw",
        shadow: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box>
        <Avatar
          sx={{
            width: 100,
            maxWidth: "70vw",
            height: 100,
            bgcolor: palette.primary.dark,
          }}
        >
          <Icon
            sx={{ fontSize: "3rem", color: palette.primary.contrastText }}
          />
        </Avatar>
      </Box>
      <Box sx={{ mt: 1.5 }}>
        <Link href={url} passHref>
          <Button>{title}</Button>
        </Link>
      </Box>
    </Box>
  );
};

export default NewsCategoryCard;
