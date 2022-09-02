import React from "react";
import Box from "@mui/material/Box";
import { Palette } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import Typography from "@mui/material/Typography";
import DialogContentText from "@mui/material/DialogContentText";

const NoteDialog = ({
  text,
  open,
  onClose,
  palette,
}: {
  text: string;
  open: boolean;
  onClose: () => void;
  palette: Palette;
}) => {
  return (
    <Dialog
      scroll="paper"
      {...{ open, onClose }}
    >
      <Box sx={{ p: 3, bgcolor: palette.primary.dark }}>
        <DialogContentText>
          <Typography
            sx={{ color: palette.primary.contrastText }}
            variant="subtitle1"
          >
            {text}
          </Typography>
        </DialogContentText>
      </Box>
    </Dialog>
  );
};

export default NoteDialog;
