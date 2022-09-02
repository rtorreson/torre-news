import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { useTheme } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { SxProps } from "@mui/material";
import Typography from "@mui/material/Typography";
import { setColorAlpha } from "../../libraries/utils";
import { PAPER_BG_ALPHA } from "../../libraries/constants";

const GeneralCard = ({
  children,
  title,
  icon,
  greenBg,
  sx,
}: {
  children: JSX.Element[] | JSX.Element;
  title: string;
  icon: React.ReactElement | Element;
  greenBg?: boolean;
  sx?: SxProps;
}) => {
  const { palette } = useTheme();
  return (
    <Paper
      sx={{
        position: "relative",
        borderRadius: 2,
        padding: 2,
        pt: 10,
        bgcolor:
          greenBg !== false
            ? setColorAlpha(palette.primary.light, PAPER_BG_ALPHA)
            : "inherit",
        ...sx,
      }}
    >
      <Box
        sx={{
          bgcolor: palette.primary.main,
          position: "absolute",
          inset: "0.75rem -0.5rem auto 0.5rem",
          padding: 1,
          borderRadius: 2,
        }}
      >
        <Typography color="white" variant="h5" component="h4">
          {title}
        </Typography>
        <Avatar
          sx={{
            width: 60,
            height: 60,
            position: "absolute",
            inset: "-0.25rem 0.75rem auto auto",
            bgcolor: palette.secondary.main,
          }}
        >
          {icon}
        </Avatar>
      </Box>
      {children}
    </Paper>
  );
};

export default GeneralCard;
