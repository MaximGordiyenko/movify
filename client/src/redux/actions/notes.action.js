import { v4 as uuidv4 } from "uuid";
import { noteConstants } from "../../constants/note.constants";

export const createNote = ({ title, details, category }) => ({
  type: noteConstants.CREATE_NOTE,
  id: uuidv4(),
  title,
  details,
  category,
});

export const deleteNote = id => ({
  type: noteConstants.DELETE_NOTE,
  id,
});