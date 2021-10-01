import {ADD_POST, DELETE_POST} from "../../actions/posts/types";

const postReducer = (state = [], {type, id, title, body}) => {
  switch (type) {
    case ADD_POST:
      return [
        ...state,
        {
          id,
          title,
          body
        }
      ];
    
    case DELETE_POST:
      return [
        ...state.filter(post => post.id !== id)
      ];
    
    default:
      return state;
  }
};

export default postReducer;
