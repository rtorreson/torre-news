import axios from "axios";
import { Note } from "../../libraries/notes-types";
import { NOTES_URL } from "../../libraries/constants";

export async function fetchNotesList(): Promise<Note[]> {
  try {
    const response = await axios.get<any>(NOTES_URL, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response?.data) return response.data;
  } catch (err) {
    console.log(err)
    return Promise.reject(err);
  }
  return Promise.reject();
}
