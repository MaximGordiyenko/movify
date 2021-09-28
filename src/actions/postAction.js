import { v4 as uuidv4 } from 'uuid';
import {ADD_POST, DELETE_POST} from "./types";

const createPost = ({title, body}) => ({
  type: ADD_POST,
  id: uuidv4(),
  title,
  body,
});

const deletePost = id => ({
  type: DELETE_POST,
  id,
});

export {createPost, deletePost};
