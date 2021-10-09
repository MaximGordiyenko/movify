import { CREATE_NOTE, DELETE_NOTE } from "../types";
import { v4 as uuidv4 } from "uuid";

export const createNote = ({ title, details, category }) => ({
  type: CREATE_NOTE,
  id: uuidv4(),
  title,
  details,
  category,
});

export const deleteNOTES = id => ({
  type: DELETE_NOTE,
  id,
});
