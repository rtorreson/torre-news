import React from "react";
import Box from "@mui/material/Box";
import { Palette } from "@mui/material";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { trimText } from "../../../general/libraries/utils";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

const NoteCard = ({
  date,
  body,
  palette,
  trimAmount = 150,
  onClick,
}: {
  date: string;
  body: string;
  palette: Palette;
  trimAmount?: number;
  onClick: (txt: string) => void;
}) => {
  const txtClr = palette.primary.light;
  return (
    <Box onClick={() => onClick(body)} sx={{ p: 2, cursor: "pointer" }}>
      <Box sx={{ display: "flex", alignItems: "center", mb: 0.5 }}>
        <CalendarTodayIcon sx={{ color: txtClr, mr: 1 }} />
        <Typography component="span" variant="body2" sx={{ color: txtClr }}>
          {date}
        </Typography>
      </Box>
      <Typography gutterBottom variant="subtitle2">
        {trimText(body, trimAmount)}
      </Typography>
      <Divider variant="middle" />
    </Box>
  );
};

export default NoteCard;
