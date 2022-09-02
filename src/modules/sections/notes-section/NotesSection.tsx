import React, { useState } from "react";
import { useTheme } from "@mui/material";
import NoteCard from "@modules/notes/components/note-card";
import { Note } from "@modules/notes/libraries/notes-types";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import GeneralCard from "@modules/general/components/general-card";
import NoteDialog from "@root/modules/notes/components/note-dialog";

function NotesSection({ notes }: { notes: Note[] }) {
  const { palette } = useTheme();
  const [currentTxt, setCurrentText] = useState("");
  const [open, setOpen] = useState(false);
  const clickHandler = function (txt: string) {
    if (!txt) return;
    setOpen(true);
    setCurrentText(txt);
  };
  return (
    <>
      {notes && (
        <GeneralCard
          sx={{ mt: 2 }}
          greenBg
          title="notes"
          icon={<TextSnippetIcon />}
        >
          {notes.map((note) => (
            <NoteCard
              onClick={clickHandler}
              body={note.value}
              date={note.date}
              key={note.id}
              palette={palette}
            />
          ))}
        </GeneralCard>
      )}
      <NoteDialog
        onClose={() => setOpen(false)}
        open={open}
        text={currentTxt}
        palette={palette}
      />
    </>
  );
}

export default NotesSection;
